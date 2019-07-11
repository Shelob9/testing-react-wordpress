import {
  insertBlock,
  getEditedPostContent,
  createNewPost,
  activatePlugin
} from "@wordpress/e2e-test-utils";

describe("Button", () => {
  beforeEach(async () => {
    await activatePlugin("josh-jswp/josh-jswp.php");
  });

  it("Can add block", async () => {
    await createNewPost();
    await insertBlock("Josh Block");

    expect(await getEditedPostContent()).toMatchSnapshot();
  });
});
