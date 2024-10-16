import React from "react";

type SectionHeadingProps = {
  childern: React.ReactNode;
};

export default function SectionHeading({ childern }: SectionHeadingProps) {
  return (
    <section className="text-3xl font-medium capitalize mb-8">
      {childern}
    </section>
  );
}
