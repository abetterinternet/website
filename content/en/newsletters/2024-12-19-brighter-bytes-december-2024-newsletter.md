---
title: "Brighter Bytes - December 2024 Newsletter"
date: "2024-12-19T07:21:43-08:00"
excerpt: "ISRG's 2024 annual report • Growing momentum for Rustls adoption • Ending OCSP services in 2025 • Welcome New Sponsors! • Consider a Let's Encrypt Sponsorship in 2025"
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
									<td align="left" class="preheaderContent" pardot-data="link-color:#3771c8;" pardot-region="preheader_content00" style="text-size-adjust: 100%; color: rgb(128, 128, 128); font-family: Helvetica; font-size: 10px; line-height: 12.5px; text-align: left; padding: 10px 20px; background: rgb(249, 247, 237);" valign="top">The latest news from ISRG: December 2024</td>
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
									<td align="left" class="headerContent" pardot-region="header_image" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #505050; font-family: Helvetica; font-size: 20px; font-weight: bold; line-height: 20px; text-align: left; vertical-align: middle; padding: 0;" valign="top"><a href="https://outreach.abetterinternet.org/e/1011011/2024-12-19/2zm2t/%%email_id%%/h/%%internal.tracker_url_hash%%"><img alt="" border="0" height="310" src="/images/newsletters/2024/2024-12-19-brighter-bytes-december-2024-newsletter/image-01.gif" style="width: 600px; height: 310px; border-width: 0px; border-style: solid;" width="600"></a>​​​​​</td>
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
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top"><h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#3771c8;">The Big Byte</span></h1>

<h3><a href="https://outreach.abetterinternet.org/e/1011011/ts-2024-ISRG-Annual-Report-pdf/2zm2x/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);"><img align="right" alt="" border="0" height="144" src="/images/newsletters/2024/2024-12-19-brighter-bytes-december-2024-newsletter/image-02.png" style="width: 250px; margin-left: 2px; margin-right: 2px; float: right; height: 144px; border-width: 0px; border-style: solid;" width="250"></a><span style="color:#003a70;">ISRG's 2024 annual report</span></h3>
We’re thrilled to share our newly published <a href="https://outreach.abetterinternet.org/e/1011011/ts-2024-ISRG-Annual-Report-pdf/2zm2x/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">2024 Annual Report</a>! ​​​​​In it, you’ll see how we continue to deliver on our mission of building a more secure and privacy-respecting Internet. We couldn’t do any of it without the generous support of our donors and sponsors.<br>
<br>
Some of the highlights include reaching the milestone of Let’s Encrypt serving <a href="https://outreach.abetterinternet.org/e/1011011/-ISRG-Annual-Report-pdf-page-7/2zm31/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">500 million domains</a>, Prossimo’s <a href="https://outreach.abetterinternet.org/e/1011011/ISRG-Annual-Report-pdf-page-17/2zm34/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">progress with Rustls</a>, and a closer look at some <a href="https://outreach.abetterinternet.org/e/1011011/ISRG-Annual-Report-pdf-page-32/2zm37/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">new features</a> of our privacy-preserving metrics collection system, Divvi Up.<br>
<br>
We hope you’ll carve out a little time to read through all the ways our supporters have made our impact possible this year. (And if you haven’t donated, <em>now</em> is the most important time to <a href="https://outreach.abetterinternet.org/e/1011011/donate/2zm3b/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">financially support us with a donation</a>!)<br>
<br>
<a href="https://outreach.abetterinternet.org/e/1011011/donate/2zm3b/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);"><img align="left" alt="" border="0" height="42" src="/images/newsletters/2024/2024-12-19-brighter-bytes-december-2024-newsletter/image-03.png" style="width: 120px; height: 42px; float: left; margin-left: 5px; margin-right: 5px; border-width: 0px; border-style: solid;" width="120"></a><br>
&nbsp;</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top"><h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#3771c8;">Security Bits</span><span style="color:#003a70;"><img align="right" alt="" border="0" height="73" src="/images/newsletters/2024/2024-12-19-brighter-bytes-december-2024-newsletter/image-04.png" style="width: 100px; height: 73px; float: right; border-width: 0px; border-style: solid; margin-left: 5px; margin-right: 5px;" width="100"></span></h1>

<h3><span style="color:#003a70;">Growing momentum for Rustls adoption</span>​​​​​</h3>
Organizations like 1Password and Fly.io and Google's open source operating system Fuchsia are leading the way in memory safety by adopting Rustls. We’re happy to share that FIS, a leading global fintech firm whose services underpin a huge portion of the financial world, has joined that list!<br>
<br>
With the Rustls OpenSSL compatibility layer for Nginx, FIS was able to make the switch in just a few hours - no modifications or recompilation needed. Transitioning to Rustls is an excellent response to the recent cross-industry call from the Office of the National Cyber Director (ONCD) for companies to add memory safety to their roadmaps.<br>
<br>
If you’re running Nginx and have a few hours of engineering time, your memory safety roadmap could have this item marked as ‘complete’ in 2024.&nbsp;​​​​​​<br>
<a href="https://outreach.abetterinternet.org/e/1011011/blog-rustls-adoption-grows-/2zm3f/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">Read the full blog post</a></td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#3771c8;">Privacy Bytes</span></h1>

									<h3><span style="color:#003a70;">Ending OCSP services in 2025</span></h3>

									<p>Earlier this year we <a href="https://outreach.abetterinternet.org/e/1011011/7-23-replacing-ocsp-with-crls-/2zm3j/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">announced</a> our intent to provide certificate revocation information exclusively via Certificate Revocation Lists (CRLs), ending support for providing certificate revocation information via the Online Certificate Status Protocol (OCSP).<br>
									<br>
									In a <a href="https://outreach.abetterinternet.org/e/1011011/2024-12-05-ending-ocsp-/2zm3m/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">blog post published earlier this month</a>, we announced our timeline for ending OCSP services in 2025. Websites and people who visit them will not be affected by this change, but some non-browser software might be. Action will be required for the very small percentage of our subscribers who have manually configured their ACME client to request certificates with the OCSP Must Staple Extension.&nbsp;<br>
									<br>
									<a href="https://outreach.abetterinternet.org/e/1011011/2024-12-05-ending-ocsp-/2zm3m/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">Read the full blog post</a> to learn more about why we’re making this change and, if you may be affected, the actions you will need to take before May 2025.</p>
									</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#3771c8;">Welcome New Sponsors!</span></h1>

									<p><a href="https://outreach.abetterinternet.org/e/1011011/2024-12-19/2zm3q/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);"><img align="right" alt="" border="0" height="47" src="/images/newsletters/2024/2024-12-19-brighter-bytes-december-2024-newsletter/image-05.png" style="width: 120px; height: 47px; float: right; margin-left: 2px; margin-right: 2px; border-width: 0px; border-style: solid;" width="120">SMTP2GO</a>&nbsp;is an established email service provider that has been using Let's Encrypt for a number of years. Their customers use SSL for links in emails, link and open tracking, and unsubscribe links.&nbsp;<br>
									<br>
									<br>
									<a href="https://outreach.abetterinternet.org/e/1011011/2024-12-19/2zm3t/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);"><img align="right" alt="" border="0" height="57" src="/images/newsletters/2024/2024-12-19-brighter-bytes-december-2024-newsletter/image-06.png" style="width: 140px; height: 57px; float: right; margin: 5px 2px; border-width: 0px; border-style: solid;" width="140">Showit</a>&nbsp;exists to give users more creative freedom to build a website that reflects their true brand.&nbsp;They work hard to offer their users an intuitive platform that makes it easy to create a fully custom&nbsp;website for themselves and their clients without any need to learn code.</p>
									</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(194, 233, 233);" valign="top">
									<h3><span style="color:#003a70;"><span style="font-size:18px;">Consider a Let's Encrypt Sponsorship in 2025</span></span><img align="right" alt="" border="0" height="100" src="/images/newsletters/2024/2024-12-19-brighter-bytes-december-2024-newsletter/image-07.gif" style="width: 100px; height: 100px; float: right; margin-left: 2px; margin-right: 2px; border-width: 0px; border-style: solid;" width="100"></h3>

									<p>For nearly a decade, Let's Encrypt has provided free and user-friendly TLS certificates, facilitating exponential growth in Internet encryption worldwide. Now serving more than <a href="https://outreach.abetterinternet.org/e/1011011/stats-/2zm3x/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">500 million&nbsp;domains</a>, we continue to create a more secure and privacy-respecting Web for the 5+ billion people who use it.&nbsp;<br>
									<br>
									This impact is made possible in part by less than 100 organizations who sponsor Let’s Encrypt. If you work for a company or organization that benefits from Let's Encrypt, consider joining organizations like <a href="https://outreach.abetterinternet.org/e/1011011/sponsors-/2zm41/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">Squarespace, Entri, Tailscale, and more</a> by coming on board as a sponsor. <strong>100% of the funding for Let’s Encrypt comes from sponsorships and donations.</strong><br>
									<br>
									If you're ready to Sponsor, <a href="https://outreach.abetterinternet.org/e/1011011/47-3e56-42a4-ac45-c840d512d214/2zm44/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">click here to get started</a>. Want to learn more? <a href="https://outreach.abetterinternet.org/e/1011011/-951oGhp7kPXevsnxR8xmFaZ4-view/2zm47/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">Find more here</a>.</p>
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
								<tr style="">
									<td align="left" class="footerContent" pardot-data="" pardot-region="footer_content01" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: Helvetica; font-size: 10px; line-height: 15px; text-align: left; padding: 0px 20px 20px; background: rgb(249, 247, 237);" valign="top"><br>
									Internet Security Research Group<br>
									EIN 46-3344200<br>
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
