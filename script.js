document.addEventListener("DOMContentLoaded", function() {
    // Static content for the home page
    const homeContent = `
        <h1>Hare Srinivasa!</h1>
        <p>This is a alternate website to watch e-PATA Videos when my website https://vaiswanara.com down.</p>
        <p>You may watch CLass Videos here till the main site up</p>
        <p>Go to e-PATA menu and elect Course to watch Lessons</p>
    `;

    // Display the static content in the post-list (or any other element)
    const postList = document.getElementById('post-list');
    postList.innerHTML = homeContent;
});
