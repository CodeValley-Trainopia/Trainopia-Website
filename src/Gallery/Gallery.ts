import { LitElement, html, css } from "lit"
import {GalleryData} from "./Data"
export class GalleryNavContent extends LitElement {
    static get styles() {
        return css``
    }

    entries=GalleryData.data
    render() {
        return html`
            <div class="container">
                <div class="container d-flex justify-content-end my-5">
                    <button
                        class="btn btn-primary border-0 bg-gradient rounded-pill"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample"
                    >
                        <span class="material-icons py-1"> collections </span>
                    </button>
                </div>
            </div>
            <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                        Gallery
                    </h5>
                    <button
                        type="button"
                        class="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    <div
                        class="nav flex-column nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        ${this.entries.map(
                            (i) => html`
                                <button
                                    class="nav-link"
                                    data-bs-toggle="collapse"
                                    data-bs-target="${i["data_bs_target"]}"
                                    type="button"
                                    role="tab"
                                    aria-controls="${i["aria_controls"]}"
                                    aria-selected="false"
                                    aria-expanded="false"
                                >
                                    ${i["name"]}
                                </button>
                                ${i["data"].map(
                                    (track) => html`
                                        <ul
                                            class="list-group collapse"
                                            id="${i["id"]}"
                                        >
                                        <li
                                        class="list-group-item"
                                    >
                                        <button
                                            class="btn"
                                            id="${track.id_tab}"
                                            data-bs-toggle="${track.data_bs_toggle}"
                                            data-bs-target="#${track.id_no_tab}"
                                            type="button"
                                            role="tab"
                                            aria-controls="${track.id_no_tab}"
                                            aria-selected="false"
                                        >
                                            ${track.name}
                                        </button>
                                    </li>
                                        </ul>
                                    `
                                )}
                            `
                        )}
                    </div>
                </div>
            </div>
        `
    }
    createRenderRoot() {
        return this
    }
}
export class GalleryContent extends LitElement {
    static get styles() {
        return css``
    }

    entries = GalleryData.data
    render() {
        return html` <div class="tab-content my-5" id="v-pills-tabContent">
            ${this.entries.map(
                (i) => html`
                        ${i["data"].map(
                            (track) => html`
                                <div
                                    class="tab-pane fade"
                                    id="${track.id_no_tab}"
                                    role="tabpanel"
                                    aria-labelledby="${track.id_tab}"
                                >
                                    <div class="frame mx-auto">
                                        <div
                                            id="gallery"
                                            class="${track.className}"
                                            itemscope
                                            itemtype="http://schema.org/ImageGallery"
                                        >
                                            ${track.Gallery.map(
                                                (image) =>
                                                    html`
                                                
                                                    <figure
                                                        itemprop="associatedMedia"
                                                        itemscope
                                                        itemtype="http://schema.org/ImageObject"
                                                    >
                                                        <a
                                                            href="${image.href}"
                                                            itemprop="contentUrl"
                                                            data-size="${image.data_size}"
                                                        >
                                                            <img
                                                                class="lazyload"
                                                                data-src="${image.data_src}"
                                                                itemprop="thumbnail"
                                                                alt="Image description"
                                                            />
                                                        </a>
                                                        <figcaption
                                                            itemprop="caption description"
                                                        >
                                                            Image
                                                            caption
                                                            1
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            `
                                            )}
                                        </div>
                                    </div>
                                </div>
                            `
                        )}
            </div>
        `
            )}
        </div>`
    }

    createRenderRoot() {
        return this
    }
}
