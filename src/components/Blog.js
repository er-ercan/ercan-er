const Blog = () => {
  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Latest Blog.</h3>
        </div>
        <h5>
          If you want to see my blog you can click{" "}
          <a
            style={{ margin: "0 10px" }}
            className="px-btn px-btn-theme"
            href="https://ercan-er.github.io/blog"
            target="_blank"
          >
            {" "}
            this{" "}
          </a>{" "}
          button
        </h5>
      </div>
    </section>
  );
};
export default Blog;
