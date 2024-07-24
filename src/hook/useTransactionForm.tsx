"use client";
import { useState } from "react";
interface IMembersForm {
  id: number;
}
export const useTransactionForm = () => {
  const [kategori, setKategori] = useState("perform");
  const [check, setChek] = useState(false);
  const [members, setMembers] = useState<IMembersForm[]>([{ id: 1 }]);
  const addMember = () => {
    setMembers([...members, { id: members.length + 1 }]);
  };
  const handleCheckboxChange = (e: any): any => {
    if (e?.target?.checked) {
      setChek(true);
    }
  };
  return { check, members, addMember, handleCheckboxChange, kategori };
};
