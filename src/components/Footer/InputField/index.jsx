import React from "react";

export function InputField({
  id,
  label,
  onBlur,
  onChange,
  error,
  isTextArea = false,
}) {
  const commonProps = {
    onChange: (e) => onChange(e.target.value),
    onBlur: () => onBlur(true),
    type: "text",
    name: id,
    id,
  };
  return (
    <>
      <div className="flex flex-col w-full max-w-sm">
        <label htmlFor={id} className="text-white mb-2">
          {label}
        </label>
        {!isTextArea ? (
          <input
            {...commonProps}
            type="text"
            className="border border-gray-300 rounded-md p-2"
          />
        ) : (
          <textarea
            rows={6}
            {...commonProps}
            className="border border-gray-300 rounded-md p-2"
          />
        )}

        {error && (
          <span className="text-error text-xs ml-2 mt-1">
            O nome deve ter mais de 3 caracteres
          </span>
        )}
      </div>
    </>
  );
}
