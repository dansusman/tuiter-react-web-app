import PostSummaryList from "../PostSummaryList/index.js";
import TabBar from "../TabBar/TabBar.js";

const ExploreComponent = () => {
    return `
        <div class="pe-4 pe-sm-inherit">
            <div class="row align-items-center pe-3 pe-md-2 pe-lg-0">
                <div class="col-11 col-lg-11">
                    <div class="position-relative">
                        <input
                            class="ps-5 form-control rounded-pill"
                            placeholder="Search Tuiter"
                        />
                        <i
                            class="position-absolute wd-search-tuiter fas fa-solid fa-magnifying-glass"
                            style="color: black"
                        ></i>
                    </div>
                </div>
                <div class="col-1 col-lg-1">
                    <i
                        class="fas fa-cog fa-2x"
                        style="color: var(--blue)"
                    ></i>
                </div>
            </div>
            ${TabBar()}
            <div class="position-relative">
                <img src="../../images/starship.webp" width="100%" />
                <h1 class="position-absolute bottom-0 ps-2 text-white">
                    SpaceX's Starship
                </h1>
            </div>
            ${PostSummaryList()}
        </div>
    `;
};
export default ExploreComponent;
