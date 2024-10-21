import * as Yup from "yup";

import { useEffect, useMemo } from "react";

import { ROUTES } from "@pages/routes";
import { useAuthContext } from "@app/hooks";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../api/mutations.gen";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const REGISTER_FORM_SCHEMA = Yup.object().shape({
  identifier: Yup.string().email().required().defined(),
  password: Yup.string().required().defined(),
  provider: Yup.string().optional(),
});

export const useLoginForm = () => {
  const [login, { data, loading, error }] = useLoginMutation();

  const { setUser } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.login && data.login.jwt) {
      window.localStorage.setItem("jwt", data.login.jwt);
      setUser(data.login.user);
      navigate(ROUTES.HOME);
    }
  }, [data?.login]);

  const {
    control,
    formState: { errors: validationErrors },
    ...methods
  } = useForm({
    resolver: yupResolver(REGISTER_FORM_SCHEMA),
  });

  const handleSubmit = useMemo(
    () =>
      methods.handleSubmit((data) => {
        login({ variables: { input: data } });
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
