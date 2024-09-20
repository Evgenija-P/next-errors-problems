"use client";
import { baseURL } from "@/configs/configUrl";
import axios from "axios";
import { signOut } from "next-auth/react";

const LogOutButton = ({ user }) => {
  const handleLogout = async () => {
    try {
      // Виклик на бекенд для очищення токена
      await axios.get(`${baseURL}/auth/logout`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      // Після успішного виходу, очищуємо сесію на клієнті
      signOut({ callbackUrl: "/signin" });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button
      className="w-fit flex py-3 px-4 border border-red-600 rounded-lg bg-red-500 text-white items-center justify-center hover:bg-white hover:text-red-500"
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
