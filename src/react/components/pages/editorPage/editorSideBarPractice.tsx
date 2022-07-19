import React from "react";
import { AutoSizer, List } from "react-virtualized";
import { IAsset, AssetState, ISize } from "../../../../models/applicationState";
import { AssetPreview } from "../../common/assetPreview/assetPreviewPractice";
import { strings } from "../../../../common/strings";

/**
 * Properties for Editor Side Bar
 * @member assets - Array of assets to be previewed
 * @member onAssetSelected - Function to call when asset from side bar is selected
 * @member selectedAsset - Asset initially selected
 * @member thumbnailSize - The size of the asset thumbnails
 */

let assetsTest = {
    "assets": {
        "780bcb8cb942e98fdb8a96e7b7e116d5": {
            "asset": {
                "format": "jpg",
                "id": "780bcb8cb942e98fdb8a96e7b7e116d5",
                "name": "a85d0594017900001.jpg",
                "path": "file:C:/Users/xodlf/Downloads/a85d0594017900001.jpg",
                "size": {
                    "width": 1920,
                    "height": 1079
                },
                "state": 1,
                "type": 1,
                "predicted": true
            },
            "regions": [],
            "version": "2.2.0"
        },
        "470160a78348386901ebbe60745f2d56": {
            "asset": {
                "format": "png",
                "id": "470160a78348386901ebbe60745f2d56",
                "name": "payco_radio_over.png",
                "path": "file:C:/Users/xodlf/Downloads/moment_backup/img/order/payco_radio_over.png",
                "size": {
                    "width": 16,
                    "height": 16
                },
                "state": 1,
                "type": 1
            },
            "regions": [],
            "version": "2.2.0"
        },
        "2701dcc68f7fd408551bc8f8229c84df": {
            "asset": {
                "format": "png",
                "id": "2701dcc68f7fd408551bc8f8229c84df",
                "name": "payco_radio_off.png",
                "path": "file:C:/Users/xodlf/Downloads/moment_backup/img/order/payco_radio_off.png",
                "size": {
                    "width": 16,
                    "height": 16
                },
                "state": 1,
                "type": 1
            },
            "regions": [],
            "version": "2.2.0"
        },
        "2a36ee7153e33e4e8892e9726d07476d": {
            "asset": {
                "format": "png",
                "id": "2a36ee7153e33e4e8892e9726d07476d",
                "name": "payco_fv_icon.png",
                "path": "file:C:/Users/xodlf/Downloads/moment_backup/img/order/payco_fv_icon.png",
                "size": {
                    "width": 100,
                    "height": 149
                },
                "state": 1,
                "type": 1
            },
            "regions": [],
            "version": "2.2.0"
        },
        "f9f4eef23438a8dbbd8ada2974423c89": {
            "asset": {
                "format": "png",
                "id": "f9f4eef23438a8dbbd8ada2974423c89",
                "name": "order_price_plus.png",
                "path": "file:C:/Users/xodlf/Downloads/moment_backup/img/order/order_price_plus.png",
                "size": {
                    "width": 22,
                    "height": 22
                },
                "state": 1,
                "type": 1
            },
            "regions": [],
            "version": "2.2.0"
        },
        "dcf9e6fc03ab3f6ac5813bc26330618f": {
            "asset": {
                "format": "png",
                "id": "dcf9e6fc03ab3f6ac5813bc26330618f",
                "name": "%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88_%EB%9D%BC%EC%9D%B4%EC%96%B8%20-%20%EB%B3%B5%EC%82%AC%EB%B3%B8.png",
                "path": "file:C:/Users/xodlf/Downloads/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88_%EB%9D%BC%EC%9D%B4%EC%96%B8%20-%20%EB%B3%B5%EC%82%AC%EB%B3%B8.png",
                "size": {
                    "width": 743,
                    "height": 743
                },
                "state": 1,
                "type": 1
            },
            "regions": [],
            "version": "2.2.0"
        },
        "ee20c24cc3553f673c09e97ed25cfbb7": {
            "asset": {
                "format": "png",
                "id": "ee20c24cc3553f673c09e97ed25cfbb7",
                "name": "%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88_%EB%9D%BC%EC%9D%B4%EC%96%B8.png",
                "path": "file:C:/Users/xodlf/Downloads/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88_%EB%9D%BC%EC%9D%B4%EC%96%B8.png",
                "size": {
                    "width": 743,
                    "height": 743
                },
                "state": 1,
                "type": 1
            },
            "regions": [],
            "version": "2.2.0"
        },
        "9f8e35c643a65533c04f4ece5db8dd34": {
            "asset": {
                "format": "gif",
                "id": "9f8e35c643a65533c04f4ece5db8dd34",
                "name": "i014915696620.gif",
                "path": "file:C:/Users/xodlf/Downloads/i014915696620.gif",
                "size": {
                    "width": 450,
                    "height": 334
                },
                "state": 1,
                "type": 1
            },
            "regions": [],
            "version": "2.2.0"
        },
        "beaedb9c5dba476c886c1a1772ebc782": {
            "asset": {
                "format": "jpg",
                "id": "beaedb9c5dba476c886c1a1772ebc782",
                "name": "104953245.2.jpg",
                "path": "file:C:/Users/xodlf/Downloads/104953245.2.jpg",
                "size": {
                    "width": 640,
                    "height": 843
                },
                "state": 2,
                "type": 1,
                "predicted": true
            },
            "regions": [
                {
                    "id": "9zuB87_6d",
                    "type": "RECTANGLE",
                    "tags": [
                        "flower"
                    ],
                    "boundingBox": {
                        "height": 174.1804243647627,
                        "width": 185.84918357923146,
                        "left": 256.2490772324883,
                        "top": 465.0450076835038
                    },
                    "points": [
                        {
                            "x": 256.2490772324883,
                            "y": 465.0450076835038
                        },
                        {
                            "x": 442.09826081171974,
                            "y": 465.0450076835038
                        },
                        {
                            "x": 442.09826081171974,
                            "y": 639.2254320482666
                        },
                        {
                            "x": 256.2490772324883,
                            "y": 639.2254320482666
                        }
                    ]
                },
                {
                    "id": "Q7NxmOHM8",
                    "type": "RECTANGLE",
                    "tags": [
                        "알 수 없는 태그 이름"
                    ],
                    "boundingBox": {
                        "height": 835.0804644227028,
                        "width": 623.5069465637207,
                        "left": 16.493053436279297,
                        "top": 7.919535577297211
                    },
                    "points": [
                        {
                            "x": 16.493053436279297,
                            "y": 7.919535577297211
                        },
                        {
                            "x": 640,
                            "y": 7.919535577297211
                        },
                        {
                            "x": 640,
                            "y": 843
                        },
                        {
                            "x": 16.493053436279297,
                            "y": 843
                        }
                    ]
                },
                {
                    "id": "hkkBFuMUvS",
                    "type": "RECTANGLE",
                    "tags": [
                        "알 수 없는 태그 이름"
                    ],
                    "boundingBox": {
                        "left": 2.283306121826172,
                        "top": 3.072360545396805,
                        "width": 624.6435737609863,
                        "height": 834.8084035813808
                    },
                    "points": [
                        {
                            "x": 2.283306121826172,
                            "y": 3.072360545396805
                        },
                        {
                            "x": 626.9268798828125,
                            "y": 3.072360545396805
                        },
                        {
                            "x": 626.9268798828125,
                            "y": 837.8807641267776
                        },
                        {
                            "x": 2.283306121826172,
                            "y": 837.8807641267776
                        }
                    ]
                }
            ],
            "version": "2.2.0"
        }
    }
}
export interface IEditorSideBarProps {
    assets: IAsset[];
    onAssetSelected: (asset: IAsset) => void;
    onBeforeAssetSelected?: () => boolean;
    selectedAsset?: IAsset;
    thumbnailSize?: ISize;
}

/**
 * State for Editor Side Bar
 * @member selectedAsset - Asset selected from side bar
 */
export interface IEditorSideBarState {
    scrollToIndex: number;
}

/**
 * @name - Editor Side Bar
 * @description - Side bar for editor page
 */
export default class EditorSideBar extends React.Component<IEditorSideBarProps, IEditorSideBarState> {
    public state: IEditorSideBarState = {
        scrollToIndex: this.props.selectedAsset
            ? this.props.assets.findIndex((asset) => asset.id === this.props.selectedAsset.id)
            : 0,
    };

    // private listRef: React.RefObject<List> = React.createRef();
    private listRef: React.RefObject<List> = React.createRef();

    public render() {
        return (
            <div className="editor-page-sidebar-nav">
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            ref={this.listRef}
                            className="asset-list"
                            height={1000}
                            width={300}
                            rowCount={5}
                            rowHeight={() => this.getRowHeight(width)}
                            rowRenderer={this.rowRenderer}
                            overscanRowCount={21}
                            scrollToIndex={this.state.scrollToIndex}
                        />
                    )}
                </AutoSizer>
            </div>
        );
    }

    public componentDidUpdate(prevProps: IEditorSideBarProps) {
        if (prevProps.thumbnailSize !== this.props.thumbnailSize) {
            this.listRef.current.recomputeRowHeights();
        }

        if (!prevProps.selectedAsset && !this.props.selectedAsset) {
            return;
        }

        if ((!prevProps.selectedAsset && this.props.selectedAsset) ||
            prevProps.selectedAsset.id !== this.props.selectedAsset.id) {
            this.selectAsset(this.props.selectedAsset);
        }
    }

    private getRowHeight = (width: number) => {
        return width / (4 / 3) + 16;
    }

    private selectAsset = (selectedAsset: IAsset): void => {
        const scrollToIndex = this.props.assets.findIndex((asset) => asset.id === selectedAsset.id);

        this.setState({
            scrollToIndex,
        }, () => {
            this.listRef.current.forceUpdateGrid();
        });
    }

    private onAssetClicked = (asset: IAsset): void => {
        if (this.props.onBeforeAssetSelected) {
            if (!this.props.onBeforeAssetSelected()) {
                return;
            }
        }

        this.selectAsset(asset);
        this.props.onAssetSelected(asset);
    }

    private rowRenderer = ({ key, index, style }): JSX.Element => {
        const asset = this.props.assets[index];
        const selectedAsset = this.props.selectedAsset;

        return (
            <div key={key} style={style}
                className={this.getAssetCssClassNames(asset, selectedAsset)}
                onClick={() => this.onAssetClicked(asset)}>
                <div className="asset-item-image">
                    {this.renderBadges(asset)}
                    <AssetPreview asset={asset} />
                </div>
                <div className="asset-item-metadata">
                    <span className="asset-filename" title={asset.name}>{asset.name}</span>
                    {asset.size &&
                        <span>
                            {asset.size.width} x {asset.size.height}
                        </span>
                    }
                </div>
            </div>
        );
    }

    private renderBadges = (asset: IAsset): JSX.Element => {
        switch (asset.state) {
            case AssetState.Tagged:
                return (
                    <span title={strings.editorPage.tagged}
                        className="badge badge-tagged">
                        <i className="fas fa-tag"></i>
                    </span>
                );
            case AssetState.Visited:
                return (
                    <span title={strings.editorPage.visited}
                        className="badge badge-visited">
                        <i className="fas fa-eye"></i>
                    </span>
                );
            default:
                return null;
        }
    }

    private getAssetCssClassNames = (asset: IAsset, selectedAsset: IAsset = null): string => {
        const cssClasses = ["asset-item"];
        if (selectedAsset && selectedAsset.id === asset.id) {
            cssClasses.push("selected");
        }

        return cssClasses.join(" ");
    }
}
