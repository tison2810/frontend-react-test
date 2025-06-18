import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Button from "../../ui/button/Button";

export default function MonoInputComponent({ onSubmit }: { onSubmit: (regNum: string) => void }) {
  const [regNum, setRegNum] = useState("");

  return (
    <ComponentCard title="User Registration">
      <div className="space-y-6">
        <Label htmlFor="reg_num">Registration Number:</Label>
        <div className="flex items-center gap-3">
          <Input
            type="text"
            id="reg_num"
            className="w-full max-w-sm"
            value={regNum}
            onChange={(e) => setRegNum(e.target.value)}
            placeholder="00000000"
          />
          <Button size="sm" variant="primary" onClick={() => onSubmit(regNum)}>
            Submit
          </Button>
        </div>
      </div>
    </ComponentCard>
  );
}
