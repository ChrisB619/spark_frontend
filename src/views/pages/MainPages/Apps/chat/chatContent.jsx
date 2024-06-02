import React from "react";
import { Link } from "react-router-dom";
import { Avatar_05, PlaceHolder } from "../../../../../Routes/ImagePath";

const ChatContent = () => {
  return (
    <div>
      <div className="chats">
        <div className="chat chat-right">
          <div className="chat-body">
            <div className="chat-bubble">
              <div className="chat-content">
                <p>Hello. What can I do for you?</p>
                <span className="chat-time">8:30 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-line">
          <span className="chat-date">October 8th, 2018</span>
        </div>
        <div className="chat chat-left">
          <div className="chat-avatar">
            <Link to="/profile" className="avatar">
              <img alt="" src={Avatar_05} />
            </Link>
          </div>
          <div className="chat-body">
            <div className="chat-bubble">
              <div className="chat-content">
                <p>I'm just looking around.</p>
                <p>Will you tell me something about yourself? </p>
                <span className="chat-time">8:35 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chat-bubble">
              <div className="chat-content">
                <p>Are you there? That time!</p>
                <span className="chat-time">8:40 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="chat chat-right">
          <div className="chat-body">
            <div className="chat-bubble">
              <div className="chat-content">
                <p>Where?</p>
                <span className="chat-time">8:35 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chat-bubble">
              <div className="chat-content">
                <p>
                  OK, my name is Limingqiang. I like singing, playing
                  basketballand so on.
                </p>
                <span className="chat-time">8:42 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="chat chat-left">
          <div className="chat-avatar">
            <Link to="/profile" className="avatar">
              <img alt="" src={Avatar_05} />
            </Link>
          </div>
          <div className="chat-body">
            <div className="chat-bubble">
              <div className="chat-content">
                <p>You wait for notice.</p>
                <span className="chat-time">8:30 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chat-bubble">
              <div className="chat-content">
                <p>Consectetuorem ipsum dolor sit?</p>
                <span className="chat-time">8:50 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chat-bubble">
              <div className="chat-content">
                <p>OK?</p>
                <span className="chat-time">8:55 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chat-bubble">
              <div className="chat-content img-content">
                <div className="chat-img-group clearfix">
                  <p>Uploaded 3 Images</p>
                  <Link className="chat-img-attach" to="#">
                    <img width={182} height={137} alt="" src={PlaceHolder} />
                    <div className="chat-placeholder">
                      <div className="chat-img-name">placeholder.jpg</div>
                      <div className="chat-file-desc">842 KB</div>
                    </div>
                  </Link>
                  <Link className="chat-img-attach" to="#">
                    <img width={182} height={137} alt="" src={PlaceHolder} />
                    <div className="chat-placeholder">
                      <div className="chat-img-name">842 KB</div>
                    </div>
                  </Link>
                  <Link className="chat-img-attach" to="#">
                    <img width={182} height={137} alt="" src={PlaceHolder} />
                    <div className="chat-placeholder">
                      <div className="chat-img-name">placeholder.jpg</div>
                      <div className="chat-file-desc">842 KB</div>
                    </div>
                  </Link>
                </div>
                <span className="chat-time">9:00 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="chat chat-right">
          <div className="chat-body">
            <div className="chat-bubble">
              <div className="chat-content">
                <p>OK!</p>
                <span className="chat-time">9:00 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="chat chat-left">
          <div className="chat-avatar">
            <Link to="/profile" className="avatar">
              <img alt="" src={Avatar_05} />
            </Link>
          </div>
          <div className="chat-body">
            <div className="chat-bubble">
              <div className="chat-content">
                <p>Uploaded 3 files</p>
                <ul className="attach-list">
                  <li>
                    <i className="fa fa-file" /> <Link to="#">example.avi</Link>
                  </li>
                  <li>
                    <i className="fa fa-file" />{" "}
                    <Link to="#">activity.psd</Link>
                  </li>
                  <li>
                    <i className="fa fa-file" /> <Link to="#">example.psd</Link>
                  </li>
                </ul>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chat-bubble">
              <div className="chat-content">
                <p>Consectetuorem ipsum dolor sit?</p>
                <span className="chat-time">8:50 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chat-bubble">
              <div className="chat-content">
                <p>OK?</p>
                <span className="chat-time">8:55 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="chat chat-right">
          <div className="chat-body">
            <div className="chat-bubble">
              <div className="chat-content img-content">
                <div className="chat-img-group clearfix">
                  <p>Uploaded 6 Images</p>
                  <Link className="chat-img-attach" to="#">
                    <img width={182} height={137} alt="" src={PlaceHolder} />
                    <div className="chat-placeholder">
                      <div className="chat-img-name">placeholder.jpg</div>
                      <div className="chat-file-desc">842 KB</div>
                    </div>
                  </Link>
                  <Link className="chat-img-attach" to="#">
                    <img width={182} height={137} alt="" src={PlaceHolder} />
                    <div className="chat-placeholder">
                      <div className="chat-img-name">842 KB</div>
                    </div>
                  </Link>
                  <Link className="chat-img-attach" to="#">
                    <img width={182} height={137} alt="" src={PlaceHolder} />
                    <div className="chat-placeholder">
                      <div className="chat-img-name">placeholder.jpg</div>
                      <div className="chat-file-desc">842 KB</div>
                    </div>
                  </Link>
                  <Link className="chat-img-attach" to="#">
                    <img width={182} height={137} alt="" src={PlaceHolder} />
                    <div className="chat-placeholder">
                      <div className="chat-img-name">placeholder.jpg</div>
                      <div className="chat-file-desc">842 KB</div>
                    </div>
                  </Link>
                  <Link className="chat-img-attach" to="#">
                    <img width={182} height={137} alt="" src={PlaceHolder} />
                    <div className="chat-placeholder">
                      <div className="chat-img-name">placeholder.jpg</div>
                      <div className="chat-file-desc">842 KB</div>
                    </div>
                  </Link>
                  <Link className="chat-img-attach" to="#">
                    <img width={182} height={137} alt="" src={PlaceHolder} />
                    <div className="chat-placeholder">
                      <div className="chat-img-name">placeholder.jpg</div>
                      <div className="chat-file-desc">842 KB</div>
                    </div>
                  </Link>
                </div>
                <span className="chat-time">9:00 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="chat chat-left">
          <div className="chat-avatar">
            <Link to="/profile" className="avatar">
              <img alt="" src={Avatar_05} />
            </Link>
          </div>
          <div className="chat-body">
            <div className="chat-bubble">
              <div className="chat-content">
                <ul className="attach-list">
                  <li className="pdf-file">
                    <i className="fa-regular fa-file-pdf" />{" "}
                    <Link to="#">Document_2016.pdf</Link>
                  </li>
                </ul>
                <span className="chat-time">9:00 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="chat chat-right">
          <div className="chat-body">
            <div className="chat-bubble">
              <div className="chat-content">
                <ul className="attach-list">
                  <li className="pdf-file">
                    <i className="fa-regular fa-file-pdf" />{" "}
                    <Link to="#">Document_2016.pdf</Link>
                  </li>
                </ul>
                <span className="chat-time">9:00 am</span>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li>
                    <Link to="#" className="share-msg" title="Share">
                      <i className="fa fa-share-alt" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="edit-msg">
                      <i className="fa fa-pencil" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-msg">
                      <i className="fa fa-trash" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="chat chat-left">
          <div className="chat-avatar">
            <Link to="/profile" className="avatar">
              <img alt="" src={Avatar_05} />
            </Link>
          </div>
          <div className="chat-body">
            <div className="chat-bubble">
              <div className="chat-content">
                <p>Typing ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
