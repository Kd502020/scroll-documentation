import styles from "./AdditionalInfo.module.css"
import { useState, useEffect, useMemo } from "preact/hooks"
import { clsx } from "~/lib"

enum Status {
  NO_ADDITIONAL_INFO,
  HAS_ADDITIONAL_INFO,
  NO_TOOL_SELECTED,
}

const AdditionalInfo = ({ data, selectedTool, onClose }) => {
  const status = useMemo(() => {
    if (!selectedTool) {
      return Status.NO_TOOL_SELECTED
    }

    if (selectedTool && !selectedTool.remarkPluginFrontmatter.noAdditionalInfo) {
      return Status.HAS_ADDITIONAL_INFO
    }

    return Status.NO_ADDITIONAL_INFO
  }, [selectedTool])

  return (
    <>
      <div className={clsx(styles.additionalContainer, status === Status.NO_TOOL_SELECTED && styles.noToolSelected)}>
        <div className={styles.additionalInfo}>
          <div className={styles.closeButton} onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.731 1.56775C18.0897 1.20911 18.0897 0.627628 17.731 0.268984C17.3724 -0.0896612 16.7909 -0.0896612 16.4322 0.268984L9 7.70123L1.56775 0.268984C1.20911 -0.0896611 0.627629 -0.0896611 0.268984 0.268984C-0.0896607 0.627628 -0.0896607 1.20911 0.268984 1.56775L7.70123 9L0.268984 16.4323C-0.0896612 16.7909 -0.0896612 17.3724 0.268984 17.731C0.627628 18.0897 1.20911 18.0897 1.56775 17.731L17.731 1.56775ZM12.0065 10.7078C11.6479 10.3491 11.0664 10.3491 10.7078 10.7078C10.3491 11.0664 10.3491 11.6479 10.7078 12.0065L16.4322 17.731C16.7909 18.0897 17.3724 18.0897 17.731 17.731C18.0897 17.3724 18.0897 16.7909 17.731 16.4322L12.0065 10.7078Z"
                fill="black"
              />
            </svg>
          </div>

          {status === Status.HAS_ADDITIONAL_INFO && (
            <div className={styles.infoBox}>
              <div className={styles.title}>{selectedTool.remarkPluginFrontmatter.name}</div>
              <div className={styles.content}>{data}</div>
            </div>
          )}
          {status !== Status.HAS_ADDITIONAL_INFO && (
            <div className={styles.noToolInfo}>
              <svg xmlns="http://www.w3.org/2000/svg" width="97" height="96" viewBox="0 0 97 96" fill="none">
                <g clip-path="url(#clip0_852_716)">
                  <path
                    d="M70.8232 30.5099C71.2979 31.1924 71.1265 32.1262 70.4427 32.5987C69.7572 33.0712 68.8192 32.9005 68.3445 32.2199V32.2162C60.1739 21.883 45.2642 19.3705 34.0706 26.7749C22.2931 34.5655 19.0874 50.3868 26.9133 62.1112C33.029 71.2762 44.3036 75.4368 54.838 72.6337C55.6422 72.4143 56.4729 72.8868 56.6913 73.6874C56.9117 74.488 56.4371 75.3149 55.6328 75.5324C53.2182 76.1737 50.7244 76.4999 48.2194 76.498C32.4074 76.498 19.5903 63.7405 19.5884 47.9999C19.5884 32.2593 32.4037 19.4999 48.2156 19.498C57.0925 19.498 65.4232 23.593 70.8213 30.5062H70.8251L70.8232 30.5099Z"
                    fill="#ABABAB"
                  />
                  <path
                    d="M66.2992 96C62.971 96 60.272 93.3131 60.272 90V73.5C60.272 72.6712 60.9463 72 61.7788 72H70.8195C71.6521 72 72.3263 72.6712 72.3263 73.5V90C72.3263 93.3131 69.6273 96 66.2992 96ZM63.2856 75V90C63.2856 91.6575 64.6341 93 66.2992 93C67.9642 93 69.3127 91.6575 69.3127 90V75H63.2856Z"
                    fill="#ABABAB"
                  />
                  <path
                    d="M68.8717 74.5613L66.7414 72.4406L69.3143 69.8794V69H63.2871V69.8794L65.86 72.4406L63.7297 74.5613L60.7161 71.5613C60.4336 71.28 60.2754 70.8994 60.2754 70.5V67.5C60.2754 66.6712 60.9497 66 61.7822 66H70.823C71.6555 66 72.3298 66.6712 72.3298 67.5V70.5C72.3298 70.8975 72.1715 71.28 71.889 71.5613L68.8754 74.5613H68.8717Z"
                    fill="#ABABAB"
                  />
                  <path d="M70.8196 88.5H61.7788V91.5H70.8196V88.5Z" fill="#ABABAB" />
                  <path
                    d="M66.2992 51C63.8036 51 61.7788 48.9844 61.7788 46.5V37.5C61.7788 36.6712 62.4531 36 63.2856 36H69.3128C70.1453 36 70.8196 36.6712 70.8196 37.5V46.5C70.8196 48.9844 68.7948 51 66.2992 51ZM64.7924 39V46.5C64.7924 47.3287 65.4667 48 66.2992 48C67.1317 48 67.806 47.3287 67.806 46.5V39H64.7924Z"
                    fill="#ABABAB"
                  />
                  <path d="M67.8056 49.5H64.792V67.5H67.8056V49.5Z" fill="#ABABAB" />
                  <path
                    d="M84.9455 95.9999C81.6173 95.9999 78.9183 93.313 78.9183 89.9999V60.6205L73.3319 55.0593C73.0493 54.778 72.8911 54.3974 72.8911 53.998V41.998C72.8911 41.6005 73.0493 41.218 73.3319 40.9368L77.8522 36.4368C78.1348 36.1555 78.5171 35.998 78.9183 35.998H81.9319C82.7644 35.998 83.4387 36.6693 83.4387 37.498V47.998H86.4523V37.498C86.4523 36.6693 87.1266 35.998 87.9591 35.998H90.9727C91.372 35.998 91.7562 36.1555 92.0387 36.4368L96.5591 40.9368C96.8416 41.218 96.9999 41.5987 96.9999 41.998V53.998C96.9999 54.3955 96.8416 54.778 96.5591 55.0593L90.9727 60.6205V89.9999C90.9727 93.313 88.2736 95.9999 84.9455 95.9999ZM75.9047 53.3793L81.4912 58.9405C81.7737 59.2218 81.9319 59.6024 81.9319 60.0018V90.0018C81.9319 91.6593 83.2805 93.0018 84.9455 93.0018C86.6105 93.0018 87.9591 91.6593 87.9591 90.0018V60.0018C87.9591 59.6043 88.1173 59.2218 88.3998 58.9405L93.9863 53.3793V42.6205L90.3492 38.9999H89.4659V49.4999C89.4659 50.3287 88.7916 50.9999 87.9591 50.9999H81.9319C81.0994 50.9999 80.4251 50.3287 80.4251 49.4999V38.9999H79.5417L75.9047 42.6205V53.3793Z"
                    fill="#ABABAB"
                  />
                  <path
                    d="M80.7662 29.1112C80.3612 28.4194 79.9336 27.7406 79.4835 27.0769C79.0804 26.4825 79.1577 25.6856 79.6681 25.1775L84.4465 20.4225L75.9218 11.9362L71.1453 16.6931C70.6348 17.2013 69.8362 17.2781 69.2373 16.8769C65.0785 14.0794 60.3924 12.15 55.4652 11.2013C54.757 11.0644 54.2465 10.4456 54.2465 9.7275V3H42.1922V9.7275C42.1922 10.4456 41.6817 11.0625 40.9736 11.2013C36.0463 12.15 31.3602 14.0813 27.2014 16.8769C26.6044 17.2781 25.8039 17.2013 25.2935 16.6931L20.5169 11.9362L11.9922 20.4225L16.7706 25.1775C17.2811 25.6856 17.3583 26.4806 16.9552 27.0769C14.1469 31.2188 12.2069 35.8819 11.2539 40.7869C11.1164 41.4919 10.4948 42 9.77346 42H3.01359V54H9.77157C10.493 54 11.1126 54.5081 11.252 55.2131C12.2069 60.1181 14.145 64.7812 16.9533 68.9231C17.3564 69.5175 17.2792 70.3144 16.7688 70.8225L11.9903 75.5775L20.515 84.0638L25.2916 79.3069C25.802 78.7988 26.6006 78.7219 27.1996 79.1231C31.3602 81.9187 36.0444 83.85 40.9717 84.7988C41.6799 84.9356 42.1903 85.5544 42.1903 86.2725V93H54.2447V86.2725C54.2447 85.5544 54.7551 84.9375 55.4633 84.7988C57.4353 84.4163 59.3715 83.8763 61.2569 83.1862L62.3004 86.0025C60.6542 86.6062 58.9703 87.1012 57.2583 87.4894V94.5C57.2583 95.3288 56.584 96 55.7515 96H40.6835C39.851 96 39.1767 95.3288 39.1767 94.5V87.4894C34.7034 86.4844 30.4354 84.7256 26.5592 82.2881L21.5867 87.2456C20.9897 87.8081 20.0536 87.8081 19.4565 87.2456L8.79592 76.6387C8.20827 76.0537 8.20827 75.1031 8.79592 74.5181L13.7759 69.5681C11.3273 65.7075 9.55874 61.4569 8.55107 57.0019H1.5068C0.674291 57.0019 0 56.3306 0 55.5019V40.5019C0 39.6731 0.674291 39.0019 1.5068 39.0019H8.54918C9.55874 34.5487 11.3255 30.3 13.774 26.4412L8.80157 21.4913C8.21392 20.9062 8.21392 19.9556 8.80157 19.3706L19.4565 8.76375C19.739 8.4825 20.1214 8.325 20.5226 8.325C20.9219 8.325 21.3061 8.4825 21.5886 8.76375L26.561 13.7137C30.4373 11.2781 34.7053 9.5175 39.1767 8.5125V1.5C39.1767 0.67125 39.851 0 40.6835 0H55.7515C56.584 0 57.2583 0.67125 57.2583 1.5V8.51062C61.7316 9.51562 65.9995 11.2744 69.8758 13.7119L74.8482 8.76188C75.4453 8.19938 76.3814 8.19938 76.9784 8.76188L87.6334 19.3688C88.221 19.9538 88.221 20.9044 87.6334 21.4894L82.6609 26.4394C82.9642 26.9194 83.258 27.4069 83.5424 27.8981H83.5443C83.8796 28.6612 83.5311 29.55 82.7645 29.8856C81.998 30.2194 81.1033 29.8725 80.7662 29.1094V29.1112Z"
                    fill="#ABABAB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_852_716">
                    <rect width="97" height="96" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              {status === Status.NO_TOOL_SELECTED ? (
                <>
                  <div className={styles.noToolInfoTitle}>No tool selected</div>
                  <div className={styles.noToolInfoDescription}>
                    Try selecting a tool to learn more about using it on Scroll.
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.noToolInfoTitle}>No additional information for this project</div>
                  <div className={styles.noToolInfoDescription}>
                    Try selecting another tool to learn more about using it on Scroll.
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default AdditionalInfo
