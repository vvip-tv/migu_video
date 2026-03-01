import { printGreen, printMagenta, printRed } from "../utils/colorOut.js"
import updateChannels from "./zbpro.js"

const start = new Date()
printMagenta("开始更新...")


printMagenta("开始更新接口文件...")
let updateResult = 2
for (let i = 0; i < 3; i++) {
  try {
    updateResult = await updateChannels()
    break
  } catch (error) {
    printRed("接口更新出现问题，正在重试...")
  }
}

switch (updateResult) {
  case 1:
    printGreen(`接口数据已是最新，无需更新`)
    // process.exit(0)
    break
  case 2:
    printRed(`接口请求失败`)
    process.exit(1)
  default:
    printGreen("接口文件更新完成！")
    break;
}


printGreen(`用时 ${(Date.now() - start.getTime()) / 1000}秒`)
