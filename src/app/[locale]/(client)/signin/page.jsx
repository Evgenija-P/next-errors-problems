import LoginForm from "@/components/LoginForm";

export default function Singin({ params }) {
  return (
    <div className="w-9/12 mx-auto mt-10">
      <h1 className="text-center text-5xl text-green-600 my-10"> This is SingIn Page</h1>
      <LoginForm />
    </div>
  );
}
