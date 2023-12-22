import { getCurrentUser } from "vuefire";

export default async function getAuth() {
  //legit just calls getCurrentUser & returns the object
  const user = await getCurrentUser();
  return user;
}
