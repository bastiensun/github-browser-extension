import { Checkbox } from "~checkbox";
import { type PlasmoCSConfig } from "plasmo";
import { type ReactNode } from "react";

export const config: PlasmoCSConfig = {
  matches: ["https://github.com/*"],
};

export const getInlineAnchor = async (): Promise<Element | null> =>
  document.querySelector(
    "#partial-discussion-header .sticky-content > div > div",
  );

const Content = (): ReactNode => {
  if (!isPullRequestCreatedByMe()) {
    return null;
  }

  return <Checkbox />;
};

const isPullRequestCreatedByMe = (): boolean => {
  const pullRequestAuthorUsername = document.querySelector(
    "#discussion_bucket .timeline-comment-header .author",
  )?.textContent;

  const currentUsername = document
    .querySelector("meta[name='user-login']")
    ?.getAttribute("content");

  return pullRequestAuthorUsername === currentUsername;
};

export default Content;
