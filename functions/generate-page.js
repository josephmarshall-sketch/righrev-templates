const TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{ACCOUNT_NAME}} — RightRev</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --rr-dark: #1A3D2B; --rr-mid: #2A5C3F; --rr-accent: #4CAF7D;
    --rr-light: #EAF3DE; --rr-border: #C0DD97; --rr-text-green: #27500A;
    --gray-50: #F8F9F8; --gray-100: #F0F2F0; --gray-200: #E2E5E2;
    --gray-400: #8A9189; --gray-700: #3D4340; --gray-900: #1C1F1C;
  }
  body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #F8F9F8; padding: 32px 24px; }
  .page { max-width: 820px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
  .s-header { background: var(--rr-dark); border-radius: 14px; padding: 24px 28px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
  .header-left { display: flex; align-items: center; gap: 16px; }
  .ae-photo { width: 64px; height: 64px; border-radius: 50%; background: var(--rr-mid); border: 2px solid var(--rr-accent); display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 700; color: var(--rr-accent); flex-shrink: 0; }
  .ae-name { font-size: 17px; font-weight: 600; color: #fff; }
  .ae-role { font-size: 13px; color: rgba(255,255,255,0.5); margin-top: 2px; }
  .header-right { display: flex; flex-direction: column; align-items: flex-end; gap: 10px; }
  .pers-note { font-size: 14px; color: rgba(255,255,255,0.75); text-align: right; font-style: italic; max-width: 260px; line-height: 1.5; }
  .consult-btn { display: inline-flex; align-items: center; gap: 7px; background: var(--rr-accent); color: var(--rr-dark); font-size: 13px; font-weight: 700; padding: 9px 18px; border-radius: 8px; border: none; cursor: pointer; text-decoration: none; }
  .s-account { background: #fff; border: 1px solid var(--gray-200); border-radius: 14px; padding: 24px 28px; display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }
  .acct-left { display: flex; align-items: flex-start; gap: 14px; }
  .acct-logo { width: 52px; height: 52px; border-radius: 10px; background: var(--gray-100); border: 1px solid var(--gray-200); display: flex; align-items: center; justify-content: center; font-size: 9px; color: var(--gray-400); text-align: center; flex-shrink: 0; }
  .acct-name { font-size: 22px; font-weight: 700; color: var(--gray-900); }
  .acct-sub { font-size: 13px; color: var(--gray-400); margin-top: 3px; }
  .acct-right { text-align: right; }
  .prospect-name { font-size: 16px; font-weight: 600; color: var(--gray-900); }
  .prospect-title { font-size: 13px; color: var(--gray-400); margin-top: 3px; }
  .section-label { font-size: 11px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: var(--gray-400); margin-bottom: 10px; }
  .s-opps { background: #fff; border: 1px solid var(--gray-200); border-radius: 14px; padding: 20px 28px; }
  .opps-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
  .opp-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-bottom: 1px solid var(--gray-200); padding: 16px 0; align-items: start; }
  .opp-row:last-child { border-bottom: none; padding-bottom: 0; }
  .opp-row:first-child { padding-top: 0; }
  .opp-left { display: flex; align-items: flex-start; gap: 10px; padding-right: 20px; }
  .opp-right { padding-left: 20px; border-left: 1px solid var(--gray-200); }
  .opp-num { width: 24px; height: 24px; border-radius: 50%; background: var(--rr-dark); color: #fff; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
  .opp-signal-type { font-size: 10px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: var(--rr-mid); margin-bottom: 3px; }
  .opp-title { font-size: 14px; font-weight: 600; color: var(--gray-900); line-height: 1.4; }
  .opp-copy { font-size: 13px; color: var(--gray-400); line-height: 1.55; }
  .s-helps { border: 1px solid var(--gray-200); border-radius: 14px; overflow: hidden; display: grid; grid-template-columns: 1fr 1fr; background: #fff; }
  .helps-left { padding: 24px; border-right: 1px solid var(--gray-200); }
  .helps-right { padding: 24px; background: var(--gray-50); }
  .helps-title { font-size: 15px; font-weight: 700; color: var(--gray-900); margin-bottom: 14px; }
  .challenge { padding: 10px 0; border-bottom: 1px solid var(--gray-200); }
  .challenge:last-child { border-bottom: none; }
  .ch-label { font-size: 10px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: var(--rr-mid); margin-bottom: 3px; }
  .ch-text { font-size: 13px; color: var(--gray-700); line-height: 1.5; }
  .story-card { background: #fff; border: 1px solid var(--gray-200); border-radius: 9px; padding: 13px; margin-bottom: 8px; }
  .story-card:last-child { margin-bottom: 0; }
  .story-co { font-size: 11px; font-weight: 700; color: var(--rr-mid); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px; }
  .story-match { font-size: 11px; font-weight: 600; color: var(--rr-text-green); background: var(--rr-light); border: 1px solid var(--rr-border); border-radius: 4px; padding: 2px 8px; display: inline-block; margin: 4px 0 6px; }
  .story-text { font-size: 13px; color: var(--gray-700); line-height: 1.5; }
  .story-link { display: inline-block; margin-top: 6px; font-size: 11px; font-weight: 600; color: var(--rr-mid); text-decoration: none; }
  .s-footer { background: var(--rr-dark); border-radius: 14px; padding: 28px 32px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
  .footer-eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: var(--rr-accent); margin-bottom: 6px; }
  .footer-headline { font-size: 19px; font-weight: 700; color: #fff; line-height: 1.3; }
  .footer-sub { font-size: 13px; color: rgba(255,255,255,0.55); margin-top: 5px; }
  .footer-actions { display: flex; flex-direction: column; gap: 8px; align-items: flex-end; flex-shrink: 0; }
  .btn-primary { background: var(--rr-accent); color: var(--rr-dark); font-size: 13px; font-weight: 700; padding: 11px 22px; border-radius: 8px; border: none; cursor: pointer; }
  .btn-ghost { background: transparent; color: #fff; font-size: 12px; font-weight: 500; padding: 9px 18px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; }
</style>
</head>
<body>
<div class="page">
  <div class="s-header">
    <div class="header-left">
      <div class="ae-photo">{{AE_INITIALS}}</div>
      <div>
        <div class="ae-name">{{AE_NAME}}</div>
        <div class="ae-role">Account Executive · RightRev</div>
      </div>
    </div>
    <div class="header-right">
      <div class="pers-note">"{{PERSONALIZED_NOTE}}"</div>
      <a class="consult-btn" href="{{CALENDAR_LINK}}">Book time with me</a>
    </div>
  </div>
  <div class="s-account">
    <div class="acct-left">
      <div class="acct-logo">{{LOGO}}</div>
      <div>
        <div class="acct-name">{{ACCOUNT_NAME}}</div>
        <div class="acct-sub">{{INDUSTRY}} · {{SIZE}} employees · {{LOCATION}}</div>
      </div>
    </div>
    <div class="acct-right">
      <div class="prospect-name">{{PROSPECT_NAME}}</div>
      <div class="prospect-title">{{PROSPECT_TITLE}}</div>
    </div>
  </div>
  <div class="s-opps">
    <div class="opps-header">
      <div class="section-label" style="margin-bottom:0">Areas of growth and complexity</div>
    </div>
    <div class="opp-row">
      <div class="opp-left"><div class="opp-num">1</div><div><div class="opp-signal-type">{{SIGNAL_1_TYPE}}</div><div class="opp-title">{{SIGNAL_1_TITLE}}</div></div></div>
      <div class="opp-right"><div class="opp-copy">{{SIGNAL_1_DETAIL}}</div></div>
    </div>
    <div class="opp-row">
      <div class="opp-left"><div class="opp-num">2</div><div><div class="opp-signal-type">{{SIGNAL_2_TYPE}}</div><div class="opp-title">{{SIGNAL_2_TITLE}}</div></div></div>
      <div class="opp-right"><div class="opp-copy">{{SIGNAL_2_DETAIL}}</div></div>
    </div>
    <div class="opp-row">
      <div class="opp-left"><div class="opp-num">3</div><div><div class="opp-signal-type">{{SIGNAL_3_TYPE}}</div><div class="opp-title">{{SIGNAL_3_TITLE}}</div></div></div>
      <div class="opp-right"><div class="opp-copy">{{SIGNAL_3_DETAIL}}</div></div>
    </div>
  </div>
  <div class="s-helps">
    <div class="helps-left">
      <div class="helps-title">How RightRev solves it</div>
      <div class="challenge"><div class="ch-label">{{SIGNAL_1_TYPE}}</div><div class="ch-text">RightRev detects and reallocates revenue across SSP components the moment a contract is signed — your team gets the right numbers without touching a spreadsheet on every new deal.</div></div>
      <div class="challenge"><div class="ch-label">{{SIGNAL_2_TYPE}}</div><div class="ch-text">When a contract is amended, co-termed, or expanded mid-cycle, RightRev recalculates and posts the updated recognition immediately — your auditors get a complete trace, no manual work required.</div></div>
      <div class="challenge"><div class="ch-label">{{SIGNAL_3_TYPE}}</div><div class="ch-text">RightRev's billing engine tracks every usage event, credit drawdown, and overage as it happens — recognized revenue stays current without waiting for month-end reconciliation.</div></div>
    </div>
    <div class="helps-right">
      <div class="helps-title">How others solved this</div>
      <div class="story-card" id="story-1"><div class="story-co" id="story-1-co"></div><div class="story-match" id="story-1-match"></div><div class="story-text" id="story-1-text"></div><a class="story-link" id="story-1-link" target="_blank">Read the full story →</a></div>
      <div class="story-card" id="story-2"><div class="story-co" id="story-2-co"></div><div class="story-match" id="story-2-match"></div><div class="story-text" id="story-2-text"></div><a class="story-link" id="story-2-link" target="_blank">Read the full story →</a></div>
      <div class="story-card" id="story-3"><div class="story-co" id="story-3-co"></div><div class="story-match" id="story-3-match"></div><div class="story-text" id="story-3-text"></div><a class="story-link" id="story-3-link" target="_blank">Read the full story →</a></div>
    </div>
  </div>
  <div class="s-footer">
    <div>
      <div class="footer-eyebrow">MGI validation · RightRev story</div>
      <div class="footer-headline">Named a Leader in the MGI 360<br>Revenue Management Guide</div>
      <div class="footer-sub">See the independent analysis.</div>
    </div>
    <div class="footer-actions">
      <a href="{{DEMO_LINK}}" class="btn-primary">Get a demo</a>
      <button class="btn-ghost">Read the MGI report</button>
    </div>
  </div>
</div>
<script>
  const STORIES = [
    { company:"Epicor", tags:["ssp allocation","ssp","bundling","high transaction volume","multi-element","de-bundling","skus","volume"], match:"Same problem: SSP allocation across 40k contracts", text:"Epicor was manually allocating revenue across multi-element bundles — SKU de-bundling and SSP analysis by hand across $1.2B in annual revenue. RightRev automated the entire process, cutting month-end work and replacing four fragmented systems with one.", url:"https://www.rightrev.com/customer-stories/customer-stories-epicor/" },
    { company:"CAE", tags:["billing migration","erp migration","erp","usage-based billing","usage & consumption","usage and consumption","on-prem","hybrid"], match:"Same problem: Billing complexity across mixed revenue models", text:"CAE was running SaaS, on-prem, and hosted installations through Oracle R11, Excel, and Saber with no unified rev rec. RightRev replaced the whole stack — 90% of recognition automated, upfront and ratable and usage-based revenue all handled in one place.", url:"https://www.rightrev.com/customer-stories/cae/" },
    { company:"Docebo", tags:["contract modifications","contract modification","modifications","rapid growth","expansion","open rev rec","open revenue","pricing model"], match:"Same problem: Rev rec breaking under rapid growth", text:"Docebo's growth across 20+ industries outpaced their rev rec process. RightRev brought bookings, billing, and revenue recognition into one place inside Salesforce Revenue Cloud — books closed 50% faster, and finance stopped chasing numbers across systems.", url:"https://www.rightrev.com/customer-stories/customer-story-consectetur-des-lacinia-demo/" },
    { company:"Snowflake", tags:["usage & consumption","usage and consumption","consumption","metered","credits","credit drawdown","overage","event-based recognition","event-based","selling motions","ai product","ai finance investment","ai investment","ai"], match:"Same problem: Consumption-based recognition at scale", text:"Snowflake processes over 1 million usage events per day across compute, storage, AI features, and marketplace data. Spreadsheets and ERP workarounds couldn't keep up. RightRev runs continuous ASC 606-compliant recognition without waiting for month-end.", url:"https://www.rightrev.com/scaling-revenue-recognition-snowflake/" }
  ];
  const INTENT_ONLY = ["active ipo","ipo preparation","late stage funding","leadership change","m&a","open rev rec jobs","open revenue jobs","pricing model change","finance hiring","rapid growth","cpq implementation","new product","digital transformation","ai investment"];
  function isIntentOnly(sig){const s=(sig||"").toLowerCase();if(s.includes("ai product")||s.includes("ai finance"))return false;return INTENT_ONLY.some(t=>s.includes(t));}
  function getBestStory(sig,used){const s=(sig||"").toLowerCase();for(const story of STORIES){if(used.includes(story.company))continue;if(story.tags.some(t=>s.includes(t)))return story;}return null;}
  function matchStories(){
    const s1=document.querySelector('.opp-row:nth-child(1) .opp-signal-type')?.innerText||'';
    const s2=document.querySelector('.opp-row:nth-child(2) .opp-signal-type')?.innerText||'';
    const s3=document.querySelector('.opp-row:nth-child(3) .opp-signal-type')?.innerText||'';
    const used=[];
    [[s1,'story-1'],[s2,'story-2'],[s3,'story-3']].forEach(([sig,id])=>{
      const card=document.getElementById(id);
      if(isIntentOnly(sig)){card.style.display='none';return;}
      const story=getBestStory(sig,used);
      if(!story){card.style.display='none';return;}
      card.style.display='';used.push(story.company);
      document.getElementById(id+'-co').innerText=story.company;
      document.getElementById(id+'-match').innerText=story.match;
      document.getElementById(id+'-text').innerText=story.text;
      document.getElementById(id+'-link').href=story.url;
    });
  }
  window.addEventListener('DOMContentLoaded',matchStories);
</script>
</body>
</html>`;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  const NETLIFY_TOKEN = process.env.NETLIFY_TOKEN;
  const NETLIFY_SITE_ID = process.env.NETLIFY_SITE_ID;

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, body: 'Invalid JSON body' };
  }

  const accountData = JSON.stringify(data);
  const slug = (data.account_name || data.company_name || 'account')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const pageUrl = `https://testingsdofnsdojfnds.netlify.app/${slug}`;

  // Respond to Clay immediately to avoid timeout
  const response = {
    statusCode: 200,
    body: JSON.stringify({ status: 'processing', url: pageUrl, slug })
  };

  // Run Claude + Netlify deploy async after responding
  (async () => {
    try {
      const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 4096,
          system: `You are an HTML page generator for RightRev sales pages. When given account data, replace every {{PLACEHOLDER}} in the template below and return ONLY the completed raw HTML. No explanation, no markdown, no code fences.\n\nPLACEHOLDER RULES:\n- {{AE_NAME}} — RightRev rep full name\n- {{AE_INITIALS}} — first and last initial (e.g. JS)\n- {{PERSONALIZED_NOTE}} — 1-2 sentence personal note from AE to prospect\n- {{ACCOUNT_NAME}} — company name\n- {{INDUSTRY}} — industry\n- {{SIZE}} — employee count\n- {{LOCATION}} — city or country\n- {{LOGO}} — leave as-is\n- {{PROSPECT_NAME}} — prospect full name\n- {{PROSPECT_TITLE}} — prospect job title\n- {{CALENDAR_LINK}} — leave as # if not provided\n- {{DEMO_LINK}} — leave as # if not provided\n- {{SIGNAL_1_TYPE}} — signal category ALL CAPS\n- {{SIGNAL_1_TITLE}} — 1 sentence pain framing\n- {{SIGNAL_1_DETAIL}} — 2-3 sentences specific to this company\n- {{SIGNAL_2_TYPE}}, {{SIGNAL_2_TITLE}}, {{SIGNAL_2_DETAIL}} — second signal\n- {{SIGNAL_3_TYPE}}, {{SIGNAL_3_TITLE}}, {{SIGNAL_3_DETAIL}} — third signal\n\nTEMPLATE:\n${TEMPLATE}`,
          messages: [{ role: 'user', content: `ACCOUNT DATA:\n${accountData}` }]
        })
      });

      const claudeData = await claudeRes.json();
      const textBlock = claudeData.content && claudeData.content.find(b => b.type === 'text');
      if (!textBlock) return;

      const html = textBlock.text;

      await fetch(`https://api.netlify.com/api/v1/sites/${NETLIFY_SITE_ID}/deploys`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NETLIFY_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          files: { [`/${slug}/index.html`]: html },
          async: false
        })
      });
    } catch (err) {
      console.error('Async error:', err);
    }
  })();

  return response;
};
