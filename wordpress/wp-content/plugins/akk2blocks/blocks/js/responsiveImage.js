import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  PanelBody,
  Button,
  TextControl,
  TabPanel,
} from "@wordpress/components";
import { Box } from "@mui/material";
import CustomSwitch from "./components/CustomSwitch";
import ResponsiveRange from "./components/ResponsiveRange";
import React from "react";
import { __ } from "@wordpress/i18n";

registerBlockType("akk2blocks/responsive-image", {
  apiVersion: 2,
  title: __("Responsive Image", "akk2blocks"),
  icon: "format-image",
  category: "common",
  attributes: {
    imageId: {
      type: "number",
      default: null,
    },
    alt: {
      type: "string",
      default: "",
    },
    imageUrl: {
      type: "string",
      default: "",
    },
    imageTitle: {
      type: "string",
      default: "",
    },
    isLazyLoad: {
      type: "boolean",
      default: true,
    },
    linkUrl: {
      type: "string",
      default: "",
    },
    openInNewTab: {
      type: "boolean",
      default: false,
    },
    widthDesktop: {
      type: "object",
      default: {
        value: 100,
        unit: "%",
      },
    },
    heightDesktop: {
      type: "object",
      default: {
        value: "auto",
        unit: "px",
      },
    },
    widthTablet: {
      type: "object",
      default: {
        value: 100,
        unit: "%",
      },
    },
    heightTablet: {
      type: "object",
      default: {
        value: "auto",
        unit: "px",
      },
    },
    widthMobile: {
      type: "object",
      default: {
        value: 100,
        unit: "%",
      },
    },
    heightMobile: {
      type: "object",
      default: {
        value: "auto",
        unit: "px",
      },
    },
  },

  edit: function ResponsiveImageEdit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
      style: {
        "--width-desktop": `${attributes.widthDesktop.value}${attributes.widthDesktop.unit}`,
        "--height-desktop":
          attributes.heightDesktop.value === "auto"
            ? "auto"
            : `${attributes.heightDesktop.value}${attributes.heightDesktop.unit}`,
        "--width-tablet": `${attributes.widthTablet.value}${attributes.widthTablet.unit}`,
        "--height-tablet":
          attributes.heightTablet.value === "auto"
            ? "auto"
            : `${attributes.heightTablet.value}${attributes.heightTablet.unit}`,
        "--width-mobile": `${attributes.widthMobile.value}${attributes.widthMobile.unit}`,
        "--height-mobile":
          attributes.heightMobile.value === "auto"
            ? "auto"
            : `${attributes.heightMobile.value}${attributes.heightMobile.unit}`,
      },
    });

    const imageStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    };

    const containerStyle = {
      overflow: "hidden",
    };

    const imageElement = (
      <div style={containerStyle} className="akk2-responsive-image">
        <img
          src={attributes.imageUrl}
          alt={attributes.alt}
          title={attributes.imageTitle}
          loading={attributes.isLazyLoad ? "lazy" : "eager"}
          style={imageStyle}
          className="responsive-image"
        />
      </div>
    );

    return (
      <>
        <InspectorControls>
          <PanelBody title="Ustawienia obrazu" initialOpen={true}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) => {
                  setAttributes({
                    imageUrl: media.url,
                    imageId: media.id,
                    alt: media.alt || "",
                    imageTitle: media.title || "",
                  });
                }}
                allowedTypes={["image"]}
                value={attributes.imageId}
                render={({ open }) => (
                  <Button
                    onClick={open}
                    variant="secondary"
                    style={{
                      marginBottom: "10px",
                      width: "100%",
                    }}
                  >
                    {attributes.imageUrl 
                    ? "Zmień obraz" 
                    : "Wybierz obraz"}
                  </Button>
                )}
              />
            </MediaUploadCheck>

            {attributes.imageUrl && (
              <Button
                onClick={() => {
                  setAttributes({
                    imageUrl: "",
                    imageId: undefined,
                    alt: "",
                    imageTitle: "",
                  });
                }}
                variant="link"
                isDestructive
                style={{ marginBottom: "15px" }}
              >
                Usuń obraz
              </Button>
            )}

            <TextControl
              label="Tekst alternatywny"
              value={attributes.alt}
              onChange={(value) => setAttributes({ alt: value })}
              style={{ marginBottom: "15px" }}
            />

            <TextControl
              label="Link URL"
              value={attributes.linkUrl}
              onChange={(value) => 
                setAttributes({ linkUrl: value })
            }
              style={{ marginBottom: "15px" }}
            />

            <CustomSwitch
              label="Lazy loading"
              checked={attributes.isLazyLoad}
              onChange={(value) => 
                setAttributes({ isLazyLoad: value })
            }
              size="default"
            />
            <TabPanel
              className="akk2-tab-panel"
              activeClass="active-tab"
              tabs={[
                {
                  name: "desktop",
                  title: "Desktop",
                  className: "tab-desktop",
                },
                {
                  name: "tablet",
                  title: "Tablet",
                  className: "tab-tablet",
                },
                {
                  name: "mobile",
                  title: "Mobile",
                  className: "tab-mobile",
                },
              ]}
            >
              {(tab) => {
                const isDesktop = tab.name === "desktop";
                const isTablet = tab.name === "tablet";
                const isMobile = tab.name === "mobile";

                return (
                  <div>
                    <ResponsiveRange
                      label="Width"
                      value={
                        isDesktop
                          ? attributes.widthDesktop
                          : isTablet
                          ? attributes.widthTablet
                          : attributes.widthMobile
                      }
                      onChange={(value) => {
                        if (isDesktop) {
                          setAttributes({ widthDesktop: value });
                        } else if (isTablet) {
                          setAttributes({ widthTablet: value });
                        } else {
                          setAttributes({ widthMobile: value });
                        }
                      }}
                      min={0}
                      max={1920}
                    />

                    <ResponsiveRange
                      label="Height"
                      value={
                        isDesktop
                          ? attributes.heightDesktop
                          : isTablet
                          ? attributes.heightTablet
                          : attributes.heightMobile
                      }
                      onChange={(value) => {
                        if (isDesktop) {
                          setAttributes({ heightDesktop: value });
                        } else if (isTablet) {
                          setAttributes({ heightTablet: value });
                        } else {
                          setAttributes({ heightMobile: value });
                        }
                      }}
                      min={0}
                      max={1920}
                    />
                  </div>
                );
              }}
            </TabPanel>
          </PanelBody>
        </InspectorControls>

        <div {...blockProps}>
          {attributes.imageUrl &&
            (attributes.linkUrl ? (
              <a
                href={attributes.linkUrl}
                target={
                    attributes.openInNewTab ? "_blank" : "_self"
                }
                rel={
                    attributes.openInNewTab 
                    ? "noopener noreferrer" 
                    : ""
                }
              >
                {imageElement}
              </a>
            ) : (
              imageElement
            ))}
        </div>
      </>
    );
  },

  save: function ResponsiveImageSave({ attributes }) {
    const blockProps = useBlockProps.save({
      style: {
        "--width-desktop": `${attributes.widthDesktop.value}${attributes.widthDesktop.unit}`,
        "--height-desktop":
          attributes.heightDesktop.value === "auto"
            ? "auto"
            : `${attributes.heightDesktop.value}${attributes.heightDesktop.unit}`,
        "--width-tablet": `${attributes.widthTablet.value}${attributes.widthTablet.unit}`,
        "--height-tablet":
          attributes.heightTablet.value === "auto"
            ? "auto"
            : `${attributes.heightTablet.value}${attributes.heightTablet.unit}`,
        "--width-mobile": `${attributes.widthMobile.value}${attributes.widthMobile.unit}`,
        "--height-mobile":
          attributes.heightMobile.value === "auto"
            ? "auto"
            : `${attributes.heightMobile.value}${attributes.heightMobile.unit}`,
      },
    });

    const imageStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    };

    const containerStyle = {
      overflow: "hidden",
    };

    const imageElement = (
      <div style={containerStyle}>
        <img
          src={attributes.imageUrl}
          alt={attributes.alt}
          title={attributes.imageTitle}
          loading={attributes.isLazyLoad ? "lazy" : "eager"}
          style={imageStyle}
          className="responsive-image"
        />
      </div>
    );

    return (
      <div {...blockProps}>
        {attributes.imageUrl &&
          (attributes.linkUrl ? (
            <a
              href={attributes.linkUrl}
              target={
                attributes.openInNewTab ? "_blank" : "_self"
            }
              rel={
                attributes.openInNewTab 
                ? "noopener noreferrer" 
                : ""
            }
            >
              {imageElement}
            </a>
          ) : (
            imageElement
          ))}
      </div>
    );
  },
});
