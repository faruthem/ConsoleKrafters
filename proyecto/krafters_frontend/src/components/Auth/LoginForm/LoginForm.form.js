import * as Yup from "yup";

import React from "react";

export function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    identifier: Yup.string().required(true),
    password: Yup.string().required(true),
  });
}
