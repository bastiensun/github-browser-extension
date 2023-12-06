import {
  type ComponentProps,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useEffect,
  useState,
} from "react";

export const Checkbox = (): ReactNode => {
  const [isChecked, setIsChecked] = useState(false);
  const [conversationsResolvedByMe, setConversationsResolvedByMe] = useState<
    Element[]
  >([]);

  useEffect(() => {
    setConversationsResolvedByMe(getVisibleConversationsResolvedByMe(document));
    handleLoadMoreHiddenItems(setConversationsResolvedByMe);
  }, []);

  const handleChange: ComponentProps<"input">["onChange"] = (event) => {
    setIsChecked(event.target.checked);

    if (event.target.checked) {
      collapseConversations(conversationsResolvedByMe);
      return;
    }

    expandConversations(conversationsResolvedByMe);
  };

  return (
    <label>
      <input checked={isChecked} onChange={handleChange} type="checkbox" />
      Hide conversations resolved by me
    </label>
  );
};

const getVisibleConversationsResolvedByMe = (
  element: Document | Element,
): Element[] => {
  const visibleUnresolvedConversations = element.querySelectorAll(
    "details[data-resolved=false]",
  );

  return [...visibleUnresolvedConversations].filter(isResolvedByMe);
};

const isResolvedByMe = (conversation: Element): boolean => {
  const firstReviewComment = conversation.querySelector(".review-comment");

  return Boolean(
    firstReviewComment?.querySelector("button[value='THUMBS_UP unreact']"),
  );
};

const collapseConversations = (conversations: Element[]): void => {
  for (const conversation of conversations) {
    conversation.removeAttribute("open");
  }
};

const expandConversations = (conversations: Element[]): void => {
  for (const conversation of conversations) {
    conversation.setAttribute("open", "");
  }
};

const isElement = (node: Node): node is Element =>
  node.nodeType === Node.ELEMENT_NODE;

const handleLoadMoreHiddenItems = (
  setConversationsResolvedByMe: Dispatch<SetStateAction<Element[]>>,
): void => {
  const handleMutations = (mutations: MutationRecord[]): void => {
    for (const { addedNodes } of mutations) {
      for (const addedNode of addedNodes) {
        handleAddedNode(addedNode);
      }
    }
  };

  const handleAddedNode = (addedNode: Node): void => {
    if (!isElement(addedNode)) {
      return;
    }

    const newVisibleConversationsResolvedByMe =
      getVisibleConversationsResolvedByMe(addedNode);

    setConversationsResolvedByMe((previousConversations) =>
      previousConversations.concat(newVisibleConversationsResolvedByMe),
    );
  };

  const target = document.querySelector("#discussion_bucket");
  if (!target) {
    return;
  }

  const observer = new MutationObserver(handleMutations);
  const options = {
    childList: true,
    subtree: true,
  };
  observer.observe(target, options);
};
