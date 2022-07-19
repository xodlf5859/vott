import React,{ Component } from "react";
import SplitPane from "react-split-pane";
// import { KeyboardBinding } from "../../common/keyboardBinding/keyboardBinding";
import { KeyboardBinding } from "./components/common/keyboardBinding/keyboardBinding";
import { strings } from "../common/strings.ts";
import { KeyEventType } from "./components/common/keyboardManager/keyboardManager";
import EditorSideBar from "./components/pages/editorPage/editorSideBar";
// import EditorSideBar from "./components/pages/editorPage/editorSideBarPractice";
import { EditorToolbar } from "./components/pages/editorPage/editorToolbar";
// import Canvas from "./components/pages/editorPage/canvas";
import Canvas from "./components/pages/editorPage/canvasPractice";
import { AssetPreview } from "./components/common/assetPreview/assetPreview";
import { TagInput } from "./components/common/tagInput/tagInput";
import Confirm from "./components/common/confirm/confirm";
import { IToolbarItemRegistration, ToolbarItemFactory } from "../providers/toolbar/toolbarItemFactory.ts";

// import Alert from "../common/alert/alert";



//키보드바인딩 컴포넌트 -확인,
//SplitPane - 창크기 조절하는 리액트 npm (반응 분할 창)
//EditorSideBar - 왼쪽 목록바?
//EditorToolbar - 태그 툴바
// Canvas - 그림 뿌려주기
// AssetPreview - 태그로 만든 네모인듯? -> 이미지 파일들?
//TagInput - 태그 추가 하는 곳 오른쪽 메뉴바
//confirm - 확인 버튼인거같은데 필요한가? 이름변경이나 삭제에 사용
//alert - 경고창 필요한가?

// 화면에 필요한거같은건 SplitPane 안에 EditorSideBar,EditorToolbar,Canvas,AssetPreview,TagInput 이렇게 보임

//TODO 에디터 페이지의     private toolbarItems: IToolbarItemRegistration[] = ToolbarItemFactory.getToolbarItems(); 를 해결하면 툴바가 나올거같은데,,
//-> 일단 툴바 나오는건 했음 리스트는 어케하지

function toolbarItems() {
  // console.log({ToolbarItemFactory.getToolbarItems()})
  return ToolbarItemFactory.getToolbarItems();
}



class test extends Component {
  render(){
    return (
      <div className="editor-page">
                
      {[...Array(10).keys()].map((index) => {
          return (<KeyboardBinding
              displayName={strings.editorPage.tags.hotKey.apply}
              key={index}
              keyEventType={KeyEventType.KeyDown}
              accelerators={[`${index}`]}
              icon={"fa-tag"}
              handler={this.handleTagHotKey} />);
      })}
      {[...Array(10).keys()].map((index) => {
          return (<KeyboardBinding
              displayName={strings.editorPage.tags.hotKey.lock}
              key={index}
              keyEventType={KeyEventType.KeyDown}
              accelerators={[`CmdOrCtrl+${index}`]}
              icon={"fa-lock"}
              handler={this.handleCtrlTagHotKey} />);
      })}
      <SplitPane split="vertical"
          // defaultSize={this.state.thumbnailSize.width}
          minSize={100}
          maxSize={400}
          paneStyle={{ display: "flex" }}
          onChange={this.onSideBarResize}
          onDragFinished={this.onSideBarResizeComplete}>
          <div className="editor-page-sidebar bg-lighter-1">
              <EditorSideBar
                //   assets={rootAssets}
                  // selectedAsset={selectedAsset ? selectedAsset.asset : null}
                  onBeforeAssetSelected={this.onBeforeAssetSelected}
                  onAssetSelected={this.selectAsset}
                //   thumbnailSize={this.state.thumbnailSize}
              />
          </div>
          <div className="editor-page-content" onClick={this.onPageClick}>
              <div className="editor-page-content-main">
                  <div className="editor-page-content-main-header">
                      <EditorToolbar project={this.props.project}
                          items={toolbarItems()}
                          actions={this.props.actions}
                          onToolbarItemSelected={this.onToolbarItemSelected} />
                  </div>
                  <div className="editor-page-content-main-body">
                    <Canvas></Canvas>
                      {/* {selectedAsset &&
                          <Canvas
                              ref={this.canvas}
                              selectedAsset={this.state.selectedAsset}
                              onAssetMetadataChanged={this.onAssetMetadataChanged}
                              onCanvasRendered={this.onCanvasRendered}
                              onSelectedRegionsChanged={this.onSelectedRegionsChanged}
                              editorMode={this.state.editorMode}
                              selectionMode={this.state.selectionMode}
                              project={this.props.project}
                              lockedTags={this.state.lockedTags}>
                              <AssetPreview
                                  additionalSettings={this.state.additionalSettings}
                                  autoPlay={true}
                                  controlsEnabled={this.state.isValid}
                                  onBeforeAssetChanged={this.onBeforeAssetSelected}
                                  onChildAssetSelected={this.onChildAssetSelected}
                                  asset={this.state.selectedAsset.asset}
                                  childAssets={this.state.childAssets} />
                          </Canvas>
                      } */}
                  </div>
              </div>
              <div className="editor-page-right-sidebar">
                  <TagInput
                      // tags={this.props.project.tags}
                      // lockedTags={this.state.lockedTags}
                      // selectedRegions={this.state.selectedRegions}
                      // onChange={this.onTagsChanged}
                      // onLockedTagsChange={this.onLockedTagsChanged}
                      // onTagClick={this.onTagClicked}
                      // onCtrlTagClick={this.onCtrlTagClicked}
                      // onTagRenamed={this.confirmTagRenamed}
                      // onTagDeleted={this.confirmTagDeleted}
                  />
              </div>
              <Confirm title={strings.editorPage.tags.rename.title}
                  ref={this.renameTagConfirm}
                  message={strings.editorPage.tags.rename.confirmation}
                  confirmButtonColor="danger"
                  onConfirm={this.onTagRenamed} />
              <Confirm title={strings.editorPage.tags.delete.title}
                  ref={this.deleteTagConfirm}
                  message={strings.editorPage.tags.delete.confirmation}
                  confirmButtonColor="danger"
                  onConfirm={this.onTagDeleted} />
          </div>
      </SplitPane>
      {/* <Alert show={this.state.showInvalidRegionWarning}
          title={strings.editorPage.messages.enforceTaggedRegions.title}
          // tslint:disable-next-line:max-line-length
          message={strings.editorPage.messages.enforceTaggedRegions.description}
          closeButtonColor="info"
          onClose={() => this.setState({ showInvalidRegionWarning: false })} /> */}
  </div>

    );
  }
}

export default test;