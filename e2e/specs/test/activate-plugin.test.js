import {
  insertBlock,
  getEditedPostContent,
  createNewPost,
  activatePlugin
} from "@wordpress/e2e-test-utils";

describe("Button", () => {
  beforeEach(async () => {
    await activatePlugin("wordpress-plugin/wordpress-plugin.php");
  });

  it("Can add block", async () => {
    await createNewPost();
    await insertBlock("Josh Block");

    expect(await getEditedPostContent()).toMatchSnapshot();
  });
});
