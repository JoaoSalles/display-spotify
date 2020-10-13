import React from "react";
import { Button as BaseButton, SHAPE } from "baseui/button";

interface Props {
  onClick: () => void;
}

function Button(props: Props) {
  const { onClick } = props;

  return (
    <BaseButton
      onClick={() => onClick()}
      shape={SHAPE.pill}
      data-testid="button-test"
    >
      Logar com Spotify
    </BaseButton>
  );
}

export default Button;
