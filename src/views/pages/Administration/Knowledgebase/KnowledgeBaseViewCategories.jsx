import React from 'react'
import { Link } from 'react-router-dom'
import { User } from '../../../../Routes/ImagePath'

const KnowledgeBaseViewCategories = () => {
  return (
    <div>
    <div className="row">
    <div className="col-lg-8">
      <div className="card">
        <div className="card-body">
          <article className="post">
            <h1 className="post-title">Lorem ipsum dolor sit amet </h1>
            <ul className="meta">
              <li>
                <span>Created :</span> Feb, 04, 2023
              </li>
              <li>
                <span>Category:</span>{" "}
                <Link to="/knowledgebase-view">
                  Category 1
                </Link>
                ,{" "}
                <Link to="/knowledgebase-view">
                  Category 2
                </Link>
              </li>
              <li>
                <span>Last Updated:</span> April, 15, 2023
              </li>
              <li>
                <span>Comments :</span>{" "}
                <Link to="/knowledgebase-view">5</Link>
              </li>
              <li>
                <span>Views :</span> 1198
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            <h2>Sed ut perspiciatis unde omnis iste</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            <h2>Sed ut perspiciatis unde omnis iste</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </article>
          <div className="feedback">
            <h3>Was this article helpful to you?</h3>
            <p>
              <Link
                to="/knowledgebase-view"
                className="btn btn-success me-1"
              >
                <i className="fa fa-thumbs-up" />
              </Link>
              <Link
                to="/knowledgebase-view"
                className="btn btn-danger"
              >
                <i className="fa fa-thumbs-down" />
              </Link>
            </p>
            <p>29 found this helpful</p>
          </div>
          <div className="comment-section">
            <div className="comments-area clearfix">
              <h3>( 2 ) Comments</h3>
              <ul className="comment-list">
                <li>
                  <div className="comment">
                    <div className="comment-author">
                      <img
                        width={86}
                        height={86}
                        className="avatar avatar-86 photo"
                        src={User}
                        alt=""
                      />
                    </div>
                    <div className="comment-details">
                      <div className="author-name">
                        <Link
                          className="url"
                          to="/knowledgebase-view"
                        >
                          John Doe
                        </Link>{" "}
                        <span className="commentmetadata">
                          October 25, 2023 at 01:10 pm
                        </span>
                      </div>
                      <div className="comment-body">
                        <p>
                          Integer id dolor libero. Cras in turpis nulla.
                          Vivamus at tellus erat. Nulla ligula sem,
                          eleifend vitae semper et, blandit a elit. Nam et
                          ultrices lectus. Ut sit amet risus eget neque
                          scelerisque consectetur.
                        </p>
                      </div>
                      <div className="reply">
                        <Link
                          to="/knowledgebase-view"
                          className="comment-reply-link"
                          rel="nofollow"
                        >
                          <i className="fa fa-reply" /> Reply
                        </Link>
                      </div>
                    </div>
                  </div>
                  <ul className="children">
                    <li>
                      <div className="comment">
                        <div className="comment-author">
                          <img
                            width={86}
                            height={86}
                            className="avatar avatar-86 photo"
                            src={User}
                            alt=""
                          />
                        </div>
                        <div className="comment-details">
                          <div className="author-name">
                            <Link
                              to="/knowledgebase-view"
                              className="comment-reply-link"
                            />
                            <Link
                              className="url"
                              to="/knowledgebase-view"
                            >
                              Astin Robert
                            </Link>{" "}
                            <span className="commentmetadata">
                              October 25, 2023 at 01:10 pm
                            </span>
                          </div>
                          <div className="comment-body">
                            <p>
                              Mauris hendrerit consequat quam, sit amet
                              fermentum metus cursus in. Nunc ac justo
                              suscipit erat sagittis maximus a at tellus.
                              Pellentesque congue nisi a nisl volutpat
                              tempor.
                            </p>
                          </div>
                          <div className="reply">
                            <Link
                              to="/knowledgebase-view"
                              className="comment-reply-link"
                            >
                              <i className="fa fa-reply" /> Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="comment-reply">
                <h3 className="comment-reply-title">Leave a Reply</h3>
                <form>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="input-block">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-block">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-block">
                        <label htmlFor="website">Website</label>
                        <input
                          type="text"
                          id="website"
                          name="website"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <label htmlFor="comment">Comment *</label>
                    <textarea
                      id="comment"
                      name="comment"
                      className="form-control"
                      rows={3}
                      cols={5}
                      defaultValue={""}
                    />
                  </div>
                  <div className="submit-section">
                    <button
                      type="submit"
                      className="btn btn-primary submit-btn"
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="w-sidebar">
        <div className="widget widget-category">
          <h4 className="widget-title">
            <i className="fa fa-folder-o" /> Categories
          </h4>
          <ul>
            <li>
              <Link to="/knowledgebase-view">
                Categories 1
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
                Categories 2
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
                Categories 3
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
                Categories 4
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
                Categories 5
              </Link>
            </li>
          </ul>
        </div>
        <div className="widget widget-category">
          <h4 className="widget-title">
            <i className="fa fa-folder-o" /> Popular Articles
          </h4>
          <ul>
            <li>
              <Link to="/knowledgebase-view">
               
                Installation &amp; Activation{" "}
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
               
                Premium Members Features{" "}
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
               
                API Usage &amp; Guide lines{" "}
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
               
                Getting Started &amp; What is next.{" "}
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
               
                Installation &amp; Activation{" "}
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
               
                Premium Members Features{" "}
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
               
                API Usage &amp; Guide lines{" "}
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
               
                Getting Started &amp; What is next.{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="widget widget-category">
          <h4 className="widget-title">
            <i className="fa fa-folder-o" /> Latest Articles
          </h4>
          <ul>
            <li>
              <Link to="/knowledgebase-view">
               
                Installation &amp; Activation{" "}
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
               
                Premium Members Features{" "}
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
               
                API Usage &amp; Guide lines{" "}
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
               
                Getting Started &amp; What is next.{" "}
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
               
                Installation &amp; Activation{" "}
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
               
                Premium Members Features{" "}
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
               
                API Usage &amp; Guide lines{" "}
              </Link>
            </li>
            <li>
              <Link to="/knowledgebase-view">
               
                Getting Started &amp; What is next.{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default KnowledgeBaseViewCategories
