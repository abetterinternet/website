---
title: "March Brighter Bytes from Let's Encrypt and ISRG"
date: "2023-03-24T08:03:13-07:00"
excerpt: "The Big Bytes: CAA and ARI • More Bright Bytes • A Look at our Engineering Culture • Thanking our 2023 Renewing Sponsors • News from our Parent Organization, ISRG! • ISRG is now a Member of the Linux Foundation • Craig Newmark Funding • Updates from Our Sibling Projects • A Big Quarter for Prossimo and Memory Safety • New Sponsors!"
type: "newsletter"
---

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <!-- Facebook sharing information tags -->
    <meta property="og:title" content="{{Subject}}" />

    <title>{{Subject}}</title>
</head>

<body bgcolor="#FAFAFA" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; height: 100% !important; width: 100% !important; background-color: #f9f7ed; margin: 0; padding: 0;">
<style type="text/css">#outlook a {
              padding: 0;
          }
          .body{
              width: 100% !important;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
              margin: 0;
              padding: 0;
          }
          .ExternalClass {
              width:100%;
          }
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
              line-height: 100%;
          }
          img {
              outline: none;
              text-decoration: none;
              -ms-interpolation-mode: bicubic;
          }
          a img {
              border: none;
          }
          p {
              margin: 1em 0;
          }
          table td {
              border-collapse: collapse;
          }
          /* hide unsubscribe from forwards*/
          blockquote .original-only, .WordSection1 .original-only {
            display: none !important;
          }

          @media only screen and (max-width: 480px){
            body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} /* Prevent Webkit platforms from changing default text sizes */
            body{width:100% !important; min-width:100% !important;} /* Prevent iOS Mail from adding padding to the body */

            #bodyCell{padding:10px !important;}

            #templateContainer{
              max-width:600px !important;
              width:100% !important;
            }

            h1{
              font-size:24px !important;
              line-height:100% !important;
            }

            h2{
              font-size:20px !important;
              line-height:100% !important;
            }

            h3{
              font-size:18px !important;
              line-height:100% !important;
            }

            h4{
              font-size:16px !important;
              line-height:100% !important;
            }


            #templatePreheader{display:none !important;} /* Hide the template preheader to save space */

            #headerImage{
              height:auto !important;
              max-width:600px !important;
              width:100% !important;
            }

            .headerContent{
              font-size:20px !important;
              line-height:125% !important;
            }

            #bodyImage{
              height:auto !important;
              max-width:560px !important;
              width:100% !important;
            }

            .bodyContent{
              font-size:18px !important;
              line-height:125% !important;
            }

            .footerContent{
              font-size:14px !important;
              line-height:115% !important;
            }

            .footerContent a{display:block !important;} /* Place footer social and utility links on their own lines, for easier access */
          }
</style>
<table align="center" border="0" cellpadding="0" cellspacing="0" id="bodyTable" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-collapse: collapse !important; height: 100% !important; margin: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0; width: 100% !important" width="100%">
	<tbody>
		<tr>
			<td align="center" id="bodyCell" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; height: 100% !important; width: 100% !important; border-top-width: 0px; border-top-color: #f9f7ed; border-top-style: solid; margin: 0; padding: 20px;" valign="top"><!-- BEGIN TEMPLATE // -->
			<table border="0" cellpadding="0" cellspacing="0" id="templateContainer" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse !important; width: 600px; border: 1px solid #f9f7ed;">
				<tbody>
					<tr>
						<td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top"><!-- BEGIN PREHEADER // -->
						<table border="0" cellpadding="0" cellspacing="0" id="templatePreheader" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-bottom-color: #f9f7ed; border-bottom-style: solid; border-bottom-width: 1px; border-collapse: collapse !important; mso-table-lspace: 0pt; mso-table-rspace: 0pt" width="100%">
							<tbody>
								<tr style="">
									<td align="left" class="preheaderContent" pardot-data="" pardot-region="preheader_content00" style="text-size-adjust: 100%; color: rgb(128, 128, 128); font-family: Helvetica; font-size: 10px; line-height: 12.5px; text-align: left; padding: 10px 20px; background: rgb(249, 247, 237);" valign="top">Brighter Bytes from Let's Encrypt and ISRG</td>
									<td align="left" class="preheaderContent" pardot-data="" pardot-region="preheader_content01" style="text-size-adjust: 100%; color: rgb(128, 128, 128); font-family: Helvetica; font-size: 10px; line-height: 12.5px; text-align: left; padding: 10px 20px 10px 0px; background: rgb(249, 247, 237);" valign="top" width="180">&nbsp;</td>
								</tr>
							</tbody>
						</table>
						<!-- // END PREHEADER --></td>
					</tr>
					<tr>
						<td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top"><!-- BEGIN HEADER // -->
						<table border="0" cellpadding="0" cellspacing="0" id="templateHeader" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-bottom-color: #f9f7ed; border-bottom-style: solid; border-bottom-width: 1px; border-collapse: collapse !important; mso-table-lspace: 0pt; mso-table-rspace: 0pt" width="100%">
							<tbody>
								<tr pardot-repeatable="" style="">
									<td align="left" class="headerContent" pardot-region="header_image" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #505050; font-family: Helvetica; font-size: 20px; font-weight: bold; line-height: 20px; text-align: left; vertical-align: middle; padding: 0;" valign="top"><a href="https://outreach.abetterinternet.org/e/1011011/2023-03-24/98cs/%%email_id%%?h=%%internal.tracker_url_hash%%"><img alt="" border="0" height="310" id="headerImage" src="/images/newsletters/2023/2023-03-24-march-brighter-bytes-from-let-s-encrypt-and-isrg/image-01.png" style="max-width: 600px; outline: none; text-decoration: none; width: 600px; height: 310px; border-width: 0px; border-style: solid;" width="600"></a></td>
								</tr>
							</tbody>
						</table>
						<!-- // END HEADER --></td>
					</tr>
					<tr>
						<td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top"><!-- BEGIN BODY // -->
						<table border="0" cellpadding="0" cellspacing="0" id="templateBody" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-bottom-color: #f9f7ed; border-bottom-style: solid; border-bottom-width: 1px; border-collapse: collapse !important; border-top-color: #f9f7ed; border-top-style: solid; border-top-width: 1px; mso-table-lspace: 0pt; mso-table-rspace: 0pt" width="100%">
							<tbody>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<p style="line-height:1.38"><strong><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Happy March! We at Let’s Encrypt are excited to dig into the first few months of 2023 with you all. Our first newsletter of the year is packed with interesting deep dives into our work, important funding updates, and more. Stay tuned to the end to learn about our newest sponsors and how you can get involved with our work.</span></span></span></span></span></span></strong></p>
									</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top"><h1 style="display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0px; padding-bottom: 10px; text-align: left;"><font color="#171347">The Big Bytes: CAA and ARI</font></h1>
<br>
<span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Our Let’s Encrypt engineering team is making significant strides with important updates to our Boulder production environment. </span></span></span></span></span></span><br>
<br>
<span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">In December of 2022, we enabled Certification Authority Authorization (CAA ) Account and Method Binding in our production environment. CAA is a feature that allows ACME clients to use a specific DNS record to limit which Certificate Authorities are allowed to issue for that domain name. Let's Encrypt has supported CAA for many years, and support for it is mandated by the Baseline Requirements for all CAs. We have now enabled Account Binding, which allows subscribers to limit certificate issuance to a specific ACME account, and Method Binding, which limits the set of domain control validation methods. You can learn more about these extensions in </span></span></span></span></span></span><a href="https://outreach.abetterinternet.org/e/1011011/rfc-rfc8657/98cw/%%email_id%%?h=%%internal.tracker_url_hash%%" style="text-decoration:none"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">RFC 8657</span></span></span></span></span></span></span></span></a><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">.</span></span></span></span></span></span><br>
&nbsp;
<div><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">​​​​​The second update is that ACME Renewal Information (ARI) is now in production. ARI makes it possible for our subscribers to handle certificate revocation and renewal as easily and automatically as the process of getting a certificate in the first place. ARI will help subscribers identify the right time to renew a certificate – a particular benefit for those who manage thousands or even millions of certificates. It will also aid ACME clients in deciding when to renew normal, non-revoked certificates. There’s still a lot of work to do to get ARI enabled on the client side, work we’re excited to dig into! You can learn more about this process in the </span></span></span></span></span></span><a href="https://outreach.abetterinternet.org/e/1011011/hive-id-draft-acme-ari-00-html/98cz/%%email_id%%?h=%%internal.tracker_url_hash%%" style="text-decoration:none"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IETF draft</span></span></span></span></span></span></span></span></a><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none"> and <a href="https://outreach.abetterinternet.org/e/1011011/-and-reliability-with-ari-html/98d3/%%email_id%%?h=%%internal.tracker_url_hash%%">blog post</a>.</span></span></span></span></span></span></div>
</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#171347;">More Bright Bytes</span></h1>
									</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:700"><span style="font-style:normal"><span style="text-decoration:none">A Look at our Engineering Culture</span></span></span></span></span></span></h1>
									<span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">In January, our People Manager Carrissa Hsieh </span></span></span></span></span></span><a href="https://outreach.abetterinternet.org/e/1011011/01-12-eng-culture-at-isrg-html/98d6/%%email_id%%?h=%%internal.tracker_url_hash%%" style="text-decoration:none"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">published a blog post </span></span></span></span></span></span></span></span></a><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">looking at our engineering culture. We are intentional about building an environment that supports growth aspirations, mitigates single points of failure, and helps foster a positive work space for our team. While we’ll continue to seek opportunities to improve, we’re pleased with our progress toward creating a positive and supportive work culture for our engineers. </span></span></span></span></span></span></td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="font-size:16px;"><span style="color:#171347;">Thanking our 2023 Renewing Sponsors</span></span></h1>
									<span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">We also took a moment to </span></span></span></span></span></span><a href="https://outreach.abetterinternet.org/e/1011011/3-01-19-renewing-sponsors-html/98d9/%%email_id%%?h=%%internal.tracker_url_hash%%" style="text-decoration:none"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">thank the companies and organizations</span></span></span></span></span></span></span></span></a><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none"> that renewed their support of Let’s Encrypt in 2023. This includes seventeen of our original sponsors and seventy sponsors overall! </span></span></span></span></span></span></td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#171347;">News from our Parent Organization, ISRG!</span></h1>
									</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="display: block; font-family: Helvetica; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0px; padding-bottom: 10px; text-align: left;"><font color="#171347"><span style="font-size: 16px;">ISRG is now a Member of the Linux Foundation</span></font></h1>
									<span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">ISRG has had a relationship with the Linux Foundation for years, and now we’re excited to announce we’ve joined them as a member! The LF was our previous administrative home. We’re happy to be able to </span></span></span></span></span></span><a href="https://outreach.abetterinternet.org/e/1011011/post-joining-linux-foundation-/98dd/%%email_id%%?h=%%internal.tracker_url_hash%%" style="text-decoration:none"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">join as a member</span></span></span></span></span></span></span></span></a><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none"> and support their efforts to develop the Open Source community!</span></span></span></span></span></span></td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="display: block; font-family: Helvetica; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0px; padding-bottom: 10px; text-align: left;"><font color="#171347"><span style="font-size: 16px;">Craig Newmark Funding</span></font></h1>
									<span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Another major ISRG development came in February when we announced a </span></span></span></span></span></span><a href="https://outreach.abetterinternet.org/e/1011011/-craig-newmark-philanthropies-/98dh/%%email_id%%?h=%%internal.tracker_url_hash%%" style="text-decoration:none"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">$100,000 grant from Craig Newmark Philanthropies</span></span></span></span></span></span></span></span></a><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">. This funding will support the development of ISRG’s focus on improving memory safety in the Internet's most critical infrastructure.</span></span></span></span></span></span></td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0px; padding-bottom: 10px; text-align: left;"><font color="#171347">Updates from Our Sibling Projects</font></h1>
									</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="font-size:16px;"><span style="color:#171347;">A Big Quarter for Prossimo and Memory Safety</span></span></h1>

									<p style="line-height:1.38"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">It’s been a busy few months for our sibling project Prossimo. First, in late January, ISRG Executive Director Josh Aas spoke at the </span></span></span></span></span></span><a href="https://outreach.abetterinternet.org/e/1011011/blog-memory-safety-at-usenix-/98dl/%%email_id%%?h=%%internal.tracker_url_hash%%" style="text-decoration:none"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">USENIX Enigma conference on the importance of memory safety</span></span></span></span></span></span></span></span></a><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">. Along with Alex Halderman and Consumer Reports’ Yael Grauer, Josh discussed </span></span></span></span></span></span><a href="https://outreach.abetterinternet.org/e/1011011/fety-in-software-gain-momentum/98dp/%%email_id%%?h=%%internal.tracker_url_hash%%" style="text-decoration:none"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">the next steps we need to take to help move software in a memory safe direction</span></span></span></span></span></span></span></span></a><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">.&nbsp;</span></span></span></span></span></span><br>
									<br>
									<span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Prossimo’s initiatives have had several new developments. The biggest is the announcement supporting the memory safe AV1 decoder, </span></span></span></span></span></span><a href="https://outreach.abetterinternet.org/e/1011011/memorysafety-rav1d/98ds/%%email_id%%?h=%%internal.tracker_url_hash%%" style="text-decoration:none"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">rav1d</span></span></span></span></span></span></span></span></a><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">. AV1 is a relatively new, open, royalty-free video coding format. AV1 compression can be used for both video and images (the image format is called AVIF). It is rapidly gaining popularity, and we expect that many applications will need to select an AV1 decoder soon.&nbsp;</span></span></span></span></span></span><br>
									<br>
									<span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Finally, we wanted to extend a special thank you to CISA director Jen Easterly, </span></span></span></span></span></span><a href="https://outreach.abetterinternet.org/e/1011011/s-USDHSCISA-bulletins-34b657c-/98dw/%%email_id%%?h=%%internal.tracker_url_hash%%" style="text-decoration:none"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">who mentioned our work in her remarks at Carnegie Mellon in February</span></span></span></span></span></span></span></span></a><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">. Director Easterly’s presentation addressed the critical threat of memory unsafe code and how universities can start combatting this risk by teaching memory safety and security at introductory levels. We’re thankful that she is bringing national attention to memory safety!</span></span></span></span></span></span></p>
									</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#171347;">New Sponsors!</span></h1>
									<span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:700"><span style="font-style:normal"><span style="text-decoration:none">We’re excited to shout out the companies who’ve joined us in our mission to build a better Web. Meet two of our newest sponsors!<br>
									​​​​​</span></span></span></span></span></span><img align="left" alt="" border="0" height="46" src="/images/newsletters/2023/2023-03-24-march-brighter-bytes-from-let-s-encrypt-and-isrg/image-02.png" style="font-family: &quot;Open Sans&quot;, sans-serif; font-size: 12pt; white-space: pre-wrap; width: 200px; height: 46px; border-width: 0px; border-style: solid; float: left;" width="200">
									<p style="line-height:1.38"><br>
									<span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">VPSServer offers cloud tech allowing physical servers into multiple virtual servers, providing the functionality of a dedicated server at a lower cost. VPSServer has 16 server locations across the globe and a variety of plans available.</span></span></span></span></span></span></p>

									<p style="line-height:1.38"><a href="https://outreach.abetterinternet.org/e/1011011/2023-03-24/98dz/%%email_id%%?h=%%internal.tracker_url_hash%%" style="text-decoration:none"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">https://outreach.abetterinternet.org/e/1011011/2023-03-24/98dz/%%email_id%%?h=%%internal.tracker_url_hash%%</span></span></span></span></span></span></span></span></a><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">&nbsp;</span></span></span></span></span></span><br>
									&nbsp;</p>
									&nbsp;&nbsp;<img alt="" border="0" height="37" src="/images/newsletters/2023/2023-03-24-march-brighter-bytes-from-let-s-encrypt-and-isrg/image-03.png" style="height: 37px; width: 100px; border-width: 0px; border-style: solid;" width="100">
									<p style="line-height:1.38"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Entri is an easy way for users to connect a domain with your application. The complexities of correctly setting up DNS records can cause companies to experience a high churn; Entri enables your users to configure the required DNS records in just seconds</span></span></span></span></span></span></p>
									<a href="https://outreach.abetterinternet.org/e/1011011/2023-03-24/98f3/%%email_id%%?h=%%internal.tracker_url_hash%%" style="text-decoration:none"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">https://outreach.abetterinternet.org/e/1011011/2023-03-24/98f3/%%email_id%%?h=%%internal.tracker_url_hash%%</span></span></span></span></span></span></span></span></a><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none"> </span></span></span></span></span></span></td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="font-size:12px;"><span style="font-variant: normal; white-space: pre-wrap;"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:700"><span style="font-style:normal"><span style="text-decoration:none">If you’re interested in supporting Let’s Encrypt or one of our sibling projects, visit </span></span></span></span></span></span><a href="https://outreach.abetterinternet.org/e/1011011/sponsor-/98f6/%%email_id%%?h=%%internal.tracker_url_hash%%" style="text-decoration:none"><span style="font-variant: normal; white-space: pre-wrap;"><span style="font-family:'Open Sans',sans-serif"><span style="color:#1155cc"><span style="font-weight:700"><span style="font-style:normal"><span style="text-decoration:underline"><span style="text-decoration-skip-ink:none">https://outreach.abetterinternet.org/e/1011011/sponsor-/98f6/%%email_id%%?h=%%internal.tracker_url_hash%%</span></span></span></span></span></span></span></a><span style="font-variant: normal; white-space: pre-wrap;"><span style="font-family:'Open Sans',sans-serif"><span style="color:#000000"><span style="font-weight:700"><span style="font-style:normal"><span style="text-decoration:none"> for more information.</span></span></span></span></span></span></span></h1>
									</td>
								</tr>
							</tbody>
						</table>
						<!-- // END BODY --></td>
					</tr>
					<tr>
						<td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top"><!-- BEGIN FOOTER // -->
						<table border="0" cellpadding="0" cellspacing="0" id="templateFooter" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-collapse: collapse !important; border-top-color: #f9f7ed; border-top-style: solid; border-top-width: 1px; mso-table-lspace: 0pt; mso-table-rspace: 0pt" width="100%">
							<tbody>
								<tr pardot-removable="" style="">
									<td align="left" class="footerContent" pardot-data="" pardot-region="footer_content00" style="text-size-adjust: 100%; color: rgb(128, 128, 128); font-family: Helvetica; font-size: 10px; line-height: 15px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
										<tbody>
											<tr>
												<td align="center" ng-show="slink.link != ''" style="padding: 0px 5px;" width="24"><a data-link-id="76937043599427518" href="https://outreach.abetterinternet.org/e/1011011/letsencrypt/98f9/%%email_id%%?h=%%internal.tracker_url_hash%%" target="_self"><img alt="twitter" border="0" src="/images/newsletters/2023/2023-03-24-march-brighter-bytes-from-let-s-encrypt-and-isrg/image-04.png" style="display: block;" width="24"> </a></td>
												<td align="center" ng-show="slink.link != ''" style="padding: 0px 5px;" width="24"><a data-link-id="76937043604670399" href="https://outreach.abetterinternet.org/e/1011011/ternet-security-research-group/98fd/%%email_id%%?h=%%internal.tracker_url_hash%%" target="_self"><img alt="instagram" border="0" src="/images/newsletters/2023/2023-03-24-march-brighter-bytes-from-let-s-encrypt-and-isrg/image-05.png" style="display: block;" width="24"> </a></td>
											</tr>
										</tbody>
									</table>
									</td>
								</tr>
								<tr style="">
									<td align="left" class="footerContent" pardot-data="" pardot-region="footer_content01" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: Helvetica; font-size: 10px; line-height: 15px; text-align: left; padding: 0px 20px 20px; background: rgb(249, 247, 237);" valign="top">Internet Security Research Group<br>
									548 Market St, PMB 77519<br>
									San Francisco, California<br>
									94104-5401</td>
								</tr>
								<tr style="">
									<td align="left" class="footerContent original-only" pardot-data="" pardot-region="footer_content02" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: Helvetica; font-size: 10px; line-height: 15px; text-align: left; padding: 0px 20px 20px; background: rgb(249, 247, 237);" valign="top"><a href="{{Unsubscribe}}" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: #606060; font-weight: normal; text-decoration: underline;">unsubscribe from all emails</a>&nbsp;&nbsp;&nbsp;<a href="{{EmailPreferenceCenter}}" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: #606060; font-weight: normal; text-decoration: underline;">update subscription preferences</a>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						<!-- // END FOOTER --></td>
					</tr>
				</tbody>
			</table>
			<!-- // END TEMPLATE --></td>
		</tr>
	</tbody>
</table>
<br>
<!--
          This email was originally designed by the wonderful folks at MailChimp and remixed by Pardot.
          It is licensed under CC BY-SA 3.0
        -->
</body>
</html>
