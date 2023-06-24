fetch(
    'https://discord.com/api/webhooks/1121863994555248650/1_BDOqDhInW2O5C_hd80Koxh3RNmadk92P57AAqmTFuVzM9ZoQRPDAUumg0Xgvww_nJc',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // the username to be displayed
        username: 'WebsiteTracker',
        // the avatar to be displayed
        avatar_url:
          'https://lh3.googleusercontent.com/vdKbcWCGwxtvvoZG5LK-rQcix_6mXl7Z2zzVil3ggiZ6hUETgtSVdbw0hrNAbRoCTCuSt_yn4EJrBS5XzILlYBxGIhMuikJ9nVt1HVA5nI76zA5ludsdTQF9t-ANf4lZPV7Wli9JzTrA8fj1wa5YAgcza7EK1Y8uqcj92Hjm1jaJJ10OJAkdaQg6oB7lKQ',
        // contents of the message to be sent
       
        // enable mentioning of individual users or roles, but not @everyone/@here
        allowed_mentions: {
          parse: ['users', 'roles'],
        },
        // embeds to be sent
        embeds: [
          {
            // decimal number colour of the side of the embed
            color: 11730954,
            // author
            // - icon next to text at top (text is a link)
          
            // embed title
            // - link on 2nd row
            title: "Secert's Menus",
            // thumbnail
            // - small image in top right corner.
           
            // embed description
            // - text on 3rd row
            description: 'Someone is visting the webstite.',
            // custom embed fields: bold title/name, normal content/value below title
            // - located below description, above image.
           
            // image
            // - picture below description(and fields)
        
            // footer
            // - icon next to text at bottom
        
          },
        ],
      }),
    }
  );