import Image from "next/image";
import { Edit, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";

interface Data {
  _id: string;
  name: string;
  email: string;
  message: string;
  paramsId: number;
}

export default function ReviewCard({
  data,
  setUpdateInputFields,
  deleteFunction,
}: {
  data: Data;
  setUpdateInputFields: (data: Data) => void;
  deleteFunction: (id: string) => void;
}) {
  const { _id, name, message } = data;
  const [isLongMessageVisible, setIsLongMessageVisible] = useState(false);

  const isLong = message.length > 30;

  const handleUpdate = () => {
    setUpdateInputFields(data);
  };

  const handleDelete = () => {
    deleteFunction(_id);
  };

  const toggleLongMessage = () => {
    setIsLongMessageVisible((prev) => !prev);
  };

  return (
    <Card className="w-full mt-10 bg-[#f3f4f6]">
      <CardContent className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="/images/user.png"
                alt="User avatar"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-[#323232]">
                <b>{name}</b>
              </span>
              <span className="w-1 h-1 bg-[#323232] rounded-full" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={handleUpdate}>
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleDelete}>
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4 ml-10">
          <p className="text-sm text-[#323232] leading-relaxed">
            {isLongMessageVisible ? message : `${message.slice(0, 30)}...`}
          </p>
          {isLong && (
            <button
              className="text-sm font-medium text-[#72479C] text-right w-full"
              onClick={toggleLongMessage}
            >
              {isLongMessageVisible ? "Show Less" : "Read More"}
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}




















    