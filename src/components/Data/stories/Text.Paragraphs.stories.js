import Text from "../index";

import { parameters, children, id, as, align, appearance, typo } from "./props";

const story = {
  title: "components/data/Paragraphs",
  components: [Text],
  parameters,
};

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et eros risus. Vestibulum enim neque, rhoncus et tempus eu, malesuada nec metus. Cras tincidunt eu tortor non scelerisque. Suspendisse ac augue orci. Etiam volutpat libero sit amet libero volutpat, quis iaculis est aliquam. Suspendisse laoreet, mauris vel placerat tristique, lorem enim dignissim nibh, quis luctus est mauris vitae ex. Nulla sed dapibus nisl. Maecenas rutrum tortor lorem, ac elementum odio vehicula sed. Integer laoreet lorem nisi, vel porta dui molestie sed. Sed vel blandit nisl, sed aliquet justo. Suspendisse vel blandit arcu. Sed a nisi in metus imperdiet congue aliquet in ante. Sed blandit, elit ac tristique mollis, nisi odio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur dolor a interdum ullamcorper. Cras sit amet augue tortor. Quisque bibendum augue nec lacus varius, lacinia tincidunt purus tristique. Fusce consequat ipsum eget velit laoreet, ut commodo purus pharetra. Donec neque purus, laoreet aliquam vulputate vel, interdum euismod dolor. Vestibulum facilisis dictum enim, vel auctor tortor finibus vel. Quisque a metus neque. Suspendisse sed nisi varius, luctus neque et, sollicitudin neque. Nunc dictum felis metus, feugiat sollicitudin mi hendrerit vel. Integer sed urna eu ante suscipit iaculis. Aenean in egestas massa. Praesent sed libero efficitur, condimentum nisl ac, mollis enim. Aliquam placerat velit risus, a consequat sapien lobortis quis. Nam ut pulvinar augue, eget commodo tortor.

Curabitur ac nisi at ex maximus dignissim. Integer eget elit eget tortor efficitur condimentum ac eu sapien. Integer fermentum sapien lectus. Donec quis pulvinar tortor, ut semper sapien. Cras aliquam cursus gravida. Fusce in ligula id mauris ornare luctus. Quisque auctor ligula eget justo iaculis fermentum eu a mauris. Praesent ullamcorper enim eget elit convallis molestie.

Aliquam vitae ante massa. Sed dictum velit elit, consectetur porta nisi tincidunt in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vestibulum sapien lacinia, tincidunt justo et, cursus enim. Mauris hendrerit, est a bibendum dignissim, mauris nunc vestibulum dui, quis tristique metus augue eu dolor. Praesent fringilla mattis sapien vel porttitor. In accumsan sollicitudin lectus, at sagittis nibh cursus ut. Donec bibendum libero at urna tristique, id commodo libero ullamcorper. Donec mollis urna velit, eu lacinia sapien interdum in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vehicula tincidunt dui, a commodo leo venenatis ut. Etiam elementum nunc vitae ligula elementum, a scelerisque massa luctus. Nullam mi neque, malesuada eget leo non, sollicitudin placerat quam.

Donec quis enim mi. Suspendisse convallis commodo odio, at auctor augue auctor sit amet. Nullam laoreet, eros nec porta finibus, lectus quam suscipit felis, at vulputate dui elit dignissim nibh. Sed felis magna, imperdiet id dui vitae, volutpat ornare dolor. Aenean quis tempor augue. Etiam fermentum viverra venenatis. Sed eu tincidunt erat, nec eleifend tortor. Fusce vitae imperdiet felis. Integer quam mauris, volutpat quis lobortis sit amet, vehicula fermentum nulla. Phasellus interdum, arcu sed finibus dapibus, augue enim tincidunt mauris, eget iaculis metus arcu id mi.
`;

const filteredParagraphs = loremIpsum
  .split("\n")
  .filter((paragraph) => paragraph.trim() !== "");

const Paragraphs = ({ ...args }) => {
  return (
    <>
      {filteredParagraphs.map((paragraph, index) => (
        <Text key={index} {...args}>
          {paragraph}
        </Text>
      ))}
    </>
  );
};

Paragraphs.argTypes = {
  children,
  id,
  as,
  align,
  appearance,
  typo,
};

export default story;

export { Paragraphs };
