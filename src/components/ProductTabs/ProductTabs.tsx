import { useState } from "react";

import styles from "./ProductTabs.module.scss";

import { specifications } from "../../data/specifications";

interface Props {
  description: string;
}

const ProductTabs = ({
  description,
}: Props) => {
  const [activeTab, setActiveTab] =
    useState("description");

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button
          className={
            activeTab === "description"
              ? styles.active
              : ""
          }
          onClick={() =>
            setActiveTab(
              "description"
            )
          }
        >
          Description
        </button>

        <button
          className={
            activeTab ===
            "specifications"
              ? styles.active
              : ""
          }
          onClick={() =>
            setActiveTab(
              "specifications"
            )
          }
        >
          Specifications
        </button>

        <button
          className={
            activeTab === "reviews"
              ? styles.active
              : ""
          }
          onClick={() =>
            setActiveTab("reviews")
          }
        >
          Reviews
        </button>
      </div>

      <div className={styles.content}>
        {activeTab ===
          "description" && (
          <p>{description}</p>
        )}

        {activeTab ===
          "specifications" && (
          <table>
            <tbody>
              {specifications.map(
                (item) => (
                  <tr
                    key={item.label}
                  >
                    <td>
                      {item.label}
                    </td>
                    <td>
                      {item.value}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}

        {activeTab ===
          "reviews" && (
          <div>
            <div>
              ⭐⭐⭐⭐⭐ Great
              quality product.
            </div>

            <div>
              ⭐⭐⭐⭐ Worth
              buying.
            </div>

            <div>
              ⭐⭐⭐⭐⭐ Highly
              recommended.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;