import * as Yup from "yup";

import { useForm } from "react-hook-form";
import { useLoginMutation } from "../api/mutations.gen";
import { useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const REGISTER_FORM_SCHEMA = Yup.object().shape({
  identifier: Yup.string().email().required().defined(),
  password: Yup.string().required().defined(),
  provider: Yup.string().optional(),
});

export const useLoginForm = () => {
  const [login, { data, loading, error }] = useLoginMutation();

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
