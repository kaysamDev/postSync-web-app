// Generouted, changes to this file will be overridden
/* eslint-disable */

import { components, hooks, utils } from "@generouted/react-router/client";

export type Path =
  | `/`
  | `/account`
  | `/accounts`
  | `/billing-payment`
  | `/create-new-password`
  | `/create-post`
  | `/dashboard`
  | `/draft-post`
  | `/forgot-password`
  | `/login`
  | `/otp`
  | `/post-scheduler`
  | `/register`;

export type Params = {};

export type ModalPath = never;

export const { Link, Navigate } = components<Path, Params>();
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>();
export const { redirect } = utils<Path, Params>();
