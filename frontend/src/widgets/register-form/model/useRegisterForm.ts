import * as Yup from "yup";

import { useForm } from "react-hook-form";
import { useMemo } from "react";
import { useRegisterMutation } from "../api/mutations.gen";
import { yupResolver } from "@hookform/resolvers/yup";

const REGISTER_FORM_SCHEMA = Yup.object({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const useRegisterForm = () => {
  const [register, { data, loading, error }] = useRegisterMutation();

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
