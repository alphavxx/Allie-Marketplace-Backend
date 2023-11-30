# Allie's Marketplace

### Project Overview 📄

Allie’s Marketplace is an NFT marketplace built on NEAR Protocol. This is a hub for Allie’s own content and where her fans can buy her NFTs. The marketplace will also offer a variety of other content, including: videos, photos, and articles from Allie. The marketplace will be open to anyone who wants to purchase Allie’s content, and all transactions will be processed on the blockchain. This will provide a secure and efficient way for Allie to sell her content and connect with her fans.

## Goal

Our goal is to encourage web3 space adoption and utilisation by not-safe-for-work (NSFW) content producers through the development of a user-friendly and engaging NFT marketplace.

Since our software is open source, anyone can use it to create their own decentralised marketplace. For creators who struggle to make money on centralised platforms and do not have full control over their content, this will be incredibly helpful. Because the marketplaces built on this code will be decentralised, they will also be shielded from censorship.

## Code Details

**Technology stack:**

- Backend:

  - Node.js
  - Express.js
  - MongoDB
  - Supabase (For censored content storage)
  - [MintbaseJS](https://github.com/Mintbase/mintbase-js) (For Authentication)

- Frontend:

  - NextJS (ReactJS)
  - [MintbaseJS](https://github.com/Mintbase/mintbase-js) (For Contract Interaction)

## How To Run Code

> :warning: **Fill the .env file before run the code**: need env variables in given in .env file template

### Backend

First, run the backend server:

```bash
#1
npm install
#2
npm run start
```

Open http://localhost:[PORT] with your browser to see the result.

You can start editing the page by modifying `app.js`. The page auto-updates as you edit the file.

### Frontend

First, run the development server:

```bash
#1
npm install
#2
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
