import { registerBlockType } from "@wordpress/blocks";
import {
    InspectorControls,
    MediaUpload,
    MediaUploadCheck,
    useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, Button, TextControl } from "@wordpress/components";
import { Box } from "@mui/material";
import CustomSwitch from "./components/CustomSwitch";
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
        width: {
            type: "object",
            default: {
                value: 100,
                unit: "%",
            },
        },
        height: {
            type: "object",
            default: {
                value: "auto",
                unit: "px",
            },
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
    },

    edit: function ResponsiveImageEdit({ attributes, setAttributes }) {
        const blockProps = useBlockProps({
            className: "responsive-image-block",
            style: {
                width: `${attributes.width.value}${attributes.width.unit}`,
                height:
                    attributes.height.value === "auto"
                        ? "auto"
                        : `${attributes.height.value}${attributes.height.unit}`,
            },
        });

        const imageStyle = {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        };

        const containerStyle = {
            width: "100%",
            height: "100%",
            overflow: "hidden",
        };

        const imageElement = (
            <div style={containerStyle} className="responsive-image-container">
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
            className: "responsive-image-block",
            style: {
                width: `${attributes.width.value}${attributes.width.unit}`,
                height:
                    attributes.height.value === "auto"
                        ? "auto"
                        : `${attributes.height.value}${attributes.height.unit}`,
            },
        });

        const imageStyle = {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        };

        const containerStyle = {
            width: "100%",
            height: "100%",
            overflow: "hidden",
        };

        const imageElement = (
            <div style={containerStyle} className="responsive-image-container">
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
