import * as React from "react";

import * as classNames from "classnames";

export type IconProperties = {
    className?: string;
    name: string,
    onClick?: (e: React.SyntheticEvent<HTMLElement>) => void;
    span?: boolean,
    style?: any,
};

/**
 * Utilities: Icon component, wrapper around font-awesome
 */
export class Icon extends React.Component<IconProperties, {}> {
    public render(): any {
        if (this.props.span) {
            return (
                <span
                    className={this.className()}
                    onClick={(e) => this.onClick(e)}
                    style={this.props.style}
                />
            );
        } else {
            return (
                <i
                    className={this.className()}
                    onClick={(e) => this.onClick(e)}
                    style={this.props.style}
                />
            );
        }
    }

    private className(): string {
        return classNames(
            `fa fa-${this.props.name}`,
            this.props.className,
        );
    }

    private onClick(e: React.SyntheticEvent<HTMLElement>): void {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }
}
