import { registerOTel } from "@vercel/otel"

/**
 * @function register
 */
export default function register() {
  registerOTel("next-app")
}
