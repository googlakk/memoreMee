import * as Yup from "yup";

import { useEffect, useMemo } from "react";

import { ROUTES } from "@pages/routes";
import { useAuthContext } from "@app/hooks";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../api/mutations.gen";
import { yupResolver } from "@hookform/resolvers/yup";

const REGISTER_FORM_SCHEMA = Yup.object({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const useRegisterForm = () => {
  const [register, { data, loading, error }] = useRegisterMutation();

  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const {
    control,
    formState: { errors: validationErrors },
    ...methods
  } = useForm({
    resolver: yupResolver(REGISTER_FORM_SCHEMA),
  });

  useEffect(() => {
    if (data?.register && data.register.jwt) {
      window.localStorage.setItem("jwt", data.register.jwt);
      setUser(data.register.user);
      navigate(ROUTES.HOME);
    }
  }, [data?.register]);

  const handleSubmit = useMemo(
    () =>
      methods.handleSubmit((data) => {
        register({ variables: { input: data } });
      }),
    [methods.handleSubmit]
  );

  return {
    control,
    methods,
    handleSubmit,
    validationErrors,
    data,
    loading,
    error,
  };
};
