import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarLogo() {
  return (
    <Avatar>
      <AvatarImage src="/images/logo55.jpeg" alt="Logo" />
      <AvatarFallback>AH</AvatarFallback>
    </Avatar>
  );
}
