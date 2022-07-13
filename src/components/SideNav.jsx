import React from "react";
import "./SideNav.css";
const SideNav = () => {
  return (
    <>
      <div
        role="region"
        aria-label="left-navigation-menu"
        className="sidenav"
        data-radium="true"
      >
        <div
          data-radium="true"
          style={{
            flexGrow: 1,
            overflow: "auto",
            width: "100%",
            padding: "0px 15px",
            boxSizing: "border-box",
          }}
        >
          <div
            data-radium="true"
            style={{
              padding: "15px 0px",
              width: "100%",
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "rgba(25, 4, 69, 0.1)",
            }}
          >
            <a className="links" href="/jobs">
              <div
                data-radium="true"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "0px 15px",
                  margin: "2px 0px",
                  height: "31px",
                  borderRadius: "6px",
                  width: "108%",
                  position: "relative",
                  right: "4%",
                  boxSizing: "border-box",
                }}
              >
                <p
                  title="Search"
                  className="Text__Paragraph-sc-1rtclo2-1 sidenav-links"
                >
                  Search
                </p>
              </div>
            </a>
            <a className="links"  href="/browse">
              <div
                data-radium="true"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "0px 15px",
                  margin: "2px 0px",
                  height: "31px",
                  borderRadius: "6px",
                  width: "108%",
                  position: "relative",
                  right: "4%",
                  boxSizing: "border-box",
                }}
              >
                <p
                  title="Browse"
                  className="Text__Paragraph-sc-1rtclo2-1 sidenav-links"
                >
                  Browse
                </p>
              </div>
            </a>
          </div>
          <div
            data-radium="true"
            style={{
              padding: "15px 0px",
              width: "100%",
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "rgba(25, 4, 69, 0.1)",
            }}
          >
            <a className="links"  href="/track/contacts">
              <div
                data-radium="true"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "0px 15px",
                  margin: "2px 0px",
                  height: "31px",
                  borderRadius: "6px",
                  width: "108%",
                  position: "relative",
                  right: "4%",
                  boxSizing: "border-box",
                }}
              >
                <p
                  title="Contacts"
                  className="Text__Paragraph-sc-1rtclo2-1 sidenav-links"
                >
                  Contacts
                </p>
              </div>
            </a>
            <a className="links"  href="/track/documents">
              <div
                data-radium="true"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "0px 15px",
                  margin: "2px 0px",
                  height: "31px",
                  borderRadius: "6px",
                  width: "108%",
                  position: "relative",
                  right: "4%",
                  boxSizing: "border-box",
                }}
              >
                <p
                  title="Documents"
                  className="Text__Paragraph-sc-1rtclo2-1 sidenav-links"
                >
                  Documents
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
