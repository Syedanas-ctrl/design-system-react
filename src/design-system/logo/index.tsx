import Image from 'next/image';

interface ILogoProps {
  size?: "small" | "medium" | "large";
  type?: "type1" | "type2" | "type3";
  dimension?: number;
  roundness?: "rounded-full" | "rounded-none" | "rounded-sm" | "rounded" | "rounded-md";
}

const image = (type: ILogoProps["type"], size: ILogoProps["size"]) => {
  switch (true) {
    case type === "type1" && size === "small":
      return '/assets/logo/small-type-1.png';
    case type === "type1" && size === "medium":
      return '/assets/logo/medium-type-1.png';
    case type === "type1" && size === "large":
      return '/assets/logo/large-type-1.png';
    case type === "type2" && size === "small":
      return '/assets/logo/small-type-2.png';
    case type === "type2" && size === "medium":
      return '/assets/logo/medium-type-2.png';
    case type === "type2" && size === "large":
      return '/assets/logo/large-type-2.png';
    case type === "type3" && size === "small":
      return '/assets/logo/small-type-3.png';
    case type === "type3" && size === "medium":
      return '/assets/logo/medium-type-3.png';
    case type === "type3" && size === "large":
      return '/assets/logo/large-type-3.png';
  }
};

const Logo: React.FC<ILogoProps> = ({
  size = "medium",
  type = "type1",
  dimension,
  roundness = "rounded-none",
}) => {
  const src: string = image(type, size) as string;
  return (
    <div
      style={{
        width: size === "large" ? '100%' : dimension || 'auto',
        height: dimension || 'auto',
        aspectRatio: size === "small" || size === "medium" ? '1/1' : 'auto',
      }}
      className={`relative flex items-center justify-center overflow-hidden shrink-0`}>
      <Image className={roundness} src={src} alt='logo' width={100} height={100} />
    </div>
  );
};

export default Logo;
