const PostSummaryItem = (post) => {
    return `
    <li class="list-group-item">
        <div class="row">
            <div class="col-8">
                <div class="text-secondary">
                    ${post.topic}
                </div>
                <span class="col fw-bolder">${post.userName} ⚪️</span>
                <span class="text-muted">- ${post.time}</span>
                <div class="fw-bolder">
                    ${post.title} 
                </div>
            </div>
            <div class="col-4">
                <img
                    class="float-end wd-rounded"
                    src=${post.image}
                    height="100px"
                />
            </div>
        </div>
    </li>`;
};

export default PostSummaryItem;
