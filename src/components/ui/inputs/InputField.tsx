"use client";

type InputFieldProps = {
  Icon: React.ElementType;
  type: any;
  value: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  placeholder?: string;
};

export default function Input({
  Icon,
  type,
  value,
  onChange,
  id,
  name,
  placeholder,
}: InputFieldProps) {
  return (
    <div className="flex items-center border-2 dark:border-gray-500 py-2 px-3 rounded-2xl mb-4">
      {Icon && <Icon className="h-5 w-5 text-gray-400" />}
      <input
        className="pl-2 w-full outline-none border-none dark:bg-gray-800"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
