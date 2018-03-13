import React from "react";
import Center from "./Center";
import ReactMarkdown from "react-markdown";
import "./ContentBlocks.css";

const ContentBlock = ({ block }) => {
  if (block.type === "markdown") {
    return <ContentMarkdown {...block} />;
  } else if (block.type === "iframe") {
    return <ContentIframe {...block} />;
  } else if (block.type === "fullbleed") {
    return <ContentFullBleed {...block} />;
  }
  return <div />;
};

const ContentMarkdown = ({ content }) =>
  <div className="ContentMarkdown">
    <Center>
      <ReactMarkdown source={content} />
    </Center>
  </div>;

const ContentFullBleed = ({ image }) =>
  <div
    className="ContentFullBleed"
    style={{
      backgroundImage: `url(${image})`
    }}
  />;

const ContentIframe = ({ src, title, backgroundColor }) =>
  <div className="ContentIframe" style={{ backgroundColor }}>
    <iframe src={src} title={title} />
  </div>;

export default ContentBlock;
