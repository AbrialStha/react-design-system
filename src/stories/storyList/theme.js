import React from "react";
import { storiesOf } from "@storybook/react";
import { ColorStory, Defaults } from "stories/components";

storiesOf("Theme", module)
  .add("UI theme", () => <ColorStory />)
  .add("Defaults", () => <Defaults />);
