import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";

const PostSummaryComponent = () => {
  return `
    <ul class="list-group">
        ${post.map((p) => PostSummaryItem(p)).join("")}
    </ul>`;
};

export default PostSummaryComponent;
