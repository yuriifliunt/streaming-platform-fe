import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Image
        className="animate-spin"
        src="/tabasco.svg"
        alt="Tabasco"
        width={90}
        height={90}
      />
    </div>
  )
}