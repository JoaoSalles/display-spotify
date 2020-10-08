import React from "react";
import { Button as BaseButton, SHAPE } from "baseui/button";

interface Props {
  onClick: () => void
}

function Button(props: Props) {
  const { onClick } = props;

  return (
    <BaseButton
      onClick={() => onClick()}
      shape={SHAPE.pill}
    >
      Hello
    </BaseButton>
  );
}

export default Button;