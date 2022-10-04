import sharp from 'sharp'
async function resize(
  file: string,
  width: number,
  height: number,
  imgDirection: string,
  newlyResized: string
): Promise<void> {
  try {
    await sharp(`${imgDirection}/${file}.jpg`)
      .resize(width, height)
      .toFile(newlyResized)
  } catch (error) {
    console.log(error)
  }
}
export default resize
