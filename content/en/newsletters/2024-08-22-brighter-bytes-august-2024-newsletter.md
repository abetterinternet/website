---
title: "Brighter Bytes - August 2024 Newsletter"
date: "2024-08-22T09:17:38-07:00"
excerpt: "Encryption for Everybody • TRanslating All C TO Rust • Privacy preserving telemetry with Divvi Up - a command line introduction • Combining privacy preserving telemetry with differential privacy • Nonprofits helping nonprofits • Welcome to our newest Silver Sponsor!"
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
									<td align="left" class="preheaderContent" pardot-data="link-color:#3771c8;" pardot-region="preheader_content00" style="text-size-adjust: 100%; color: rgb(128, 128, 128); font-family: Helvetica; font-size: 10px; line-height: 12.5px; text-align: left; padding: 10px 20px; background: rgb(249, 247, 237);" valign="top">The latest news from ISRG: August 2024</td>
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
									<td align="left" class="headerContent" pardot-region="header_image" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #505050; font-family: Helvetica; font-size: 20px; font-weight: bold; line-height: 20px; text-align: left; vertical-align: middle; padding: 0;" valign="top"><a href="https://outreach.abetterinternet.org/e/1011011/2024-08-22/2ntjk/%%email_id%%/h/%%internal.tracker_url_hash%%"><img alt="" border="0" height="310" id="headerImage" src="/images/newsletters/2024/2024-08-22-brighter-bytes-august-2024-newsletter/image-01.png" style="max-width: 600px; outline: none; text-decoration: none; width: 600px; height: 310px; border-width: 0px; border-style: solid;" width="600"></a></td>
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
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#3771c8;">The Big Byte</span></h1>

									<h3><span style="color:#003a70;">Encryption for Everybody</span></h3>
									<strong>Did you know that Let’s Encrypt is 100% funded by charitable contributions?</strong> In the last couple of weeks, we’ve heard from hundreds of people around the world who’ve supported our month-long giving campaign, <strong>Encryption for Everybody.&nbsp;</strong>Here's a bit of what we've heard:<br>
									<img alt="" border="0" height="279" src="/images/newsletters/2024/2024-08-22-brighter-bytes-august-2024-newsletter/image-02.png" style="height: 279px; width: 600px; margin: 2px; border-width: 0px; border-style: solid;" width="600"><br>
									If Let’s Encrypt has been a help to you, we’re asking for your help now.<br>
									<strong>Can you ​​​​​<a href="https://outreach.abetterinternet.org/e/1011011/donate/2ntjn/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color:#3771c8;">donate today</a> to support our work?</strong><br>
									<img align="right" alt="Puzzle featuring the Let's Encrypt original root cert" border="0" height="180" src="/images/newsletters/2024/2024-08-22-brighter-bytes-august-2024-newsletter/image-03.png" style="width: 180px; height: 180px; margin: 0px; float: right; border-width: 0px; border-style: solid;" width="180"><br>
									When you donate $40 or more, we’ll say thanks with a thank you gift of your choice, whether that’s a Let's Encrypt tee shirt, ballcap, print, or puzzle.<br>
									<br>
									And if you’ve already donated this month, then on behalf of the billions of Internet users we serve every day, we say <strong>thank you!&nbsp;</strong>👏</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#3771c8;">Security Bits</span></h1>

									<h3><font color="#003a70">TRanslating All C TO Rust</font>​​​​​</h3>
									DARPA <a href="https://outreach.abetterinternet.org/e/1011011/news-events-2024-07-31a/2ntjr/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color:#3771c8;">recently announced</a> a new program called TRACTOR to automate the translation of the world’s most vulnerable legacy C code to the memory safe Rust programming language. “After more than two decades of grappling with memory safety issues in C and C++, the software engineering community has reached a consensus. Relying on bug-finding tools is not enough.”<br>
									<br>
									ISRG Executive Director Josh Aas shared his thoughts on the project in articles by <a href="https://outreach.abetterinternet.org/e/1011011/2024-08-03-darpa-c-to-rust-/2ntjv/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color:#3771c8;">The Register</a> and <a href="https://outreach.abetterinternet.org/e/1011011/rust-for-memory-safe-overhaul-/2ntjy/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color:#3771c8;">The New Stack</a>. “While the work of moving critical code from C to Rust does seem daunting, we have already made a lot of progress. Today there are memory safe and high performance options for <a href="https://outreach.abetterinternet.org/e/1011011/initiative-rustls-/2ntk2/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color:#3771c8;">TLS</a>, <a href="https://outreach.abetterinternet.org/e/1011011/initiative-ntp-/2ntk5/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color:#3771c8;">NTP</a>, <a href="https://outreach.abetterinternet.org/e/1011011/initiative-sudo-su-/2ntk8/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color:#3771c8;">Sudo</a>, <a href="https://outreach.abetterinternet.org/e/1011011/initiative-dns-/2ntkc/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color:#3771c8;">DNS</a>, and <a href="https://outreach.abetterinternet.org/e/1011011/initiative-av1-/2ntkg/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color:#3771c8;">AV1</a> video decoding.”&nbsp;<br>
									<br>
									We’re glad to see a thought leader like DARPA make such a significant commitment to improving Internet security!</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="line-height:18px;link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 18px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h3><img alt="" border="0" height="309" src="/images/newsletters/2024/2024-08-22-brighter-bytes-august-2024-newsletter/image-04.jpg" style="width: 600px; height: 309px; margin: 1px; border-width: 0px; border-style: solid;" width="600"></h3>
									<em><span style="font-size:12px;">If you were at <a href="https://outreach.abetterinternet.org/e/1011011/us-24-/2ntkk/%%email_id%%/h/%%internal.tracker_url_hash%%">Black Hat USA</a> in Las Vegas earlier this month, you may have spotted our very own <strong>Josh Aas</strong> and <strong>Sarah Gran</strong>&nbsp;(top left two) in this presentation by CISA Director Jen Easterly!&nbsp;It was an honor to be recognized in her presentation for the work we’ve been doing via <strong><a href="https://outreach.abetterinternet.org/e/1011011/2024-08-22/2ntkn/%%email_id%%/h/%%internal.tracker_url_hash%%">Prossimo</a></strong> to improve memory safety in critical infrastructure.</span></em></td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#3771c8;">Privacy Bytes</span></h1>

									<h3><span style="color:#003a70;">Privacy preserving telemetry with Divvi Up - a command line introduction</span></h3>

									<p>Get a peek behind the scenes on how the divvi’ing up happens, and check out our command line tutorial and demo video on getting started with Divvi Up in just five minutes.<br>
									<a href="https://outreach.abetterinternet.org/e/1011011/blog-command-line-intro-/2ntkr/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);"><strong>Read more</strong></a></p>

									<h3><span style="color:#003a70;">Combining privacy preserving telemetry with differential privacy</span></h3>

									<p>An overview of how differential privacy can be combined with the Distributed Aggregation Protocol, and related recent developments.<br>
									<a href="https://outreach.abetterinternet.org/e/1011011/try-with-differential-privacy-/2ntkv/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);"><strong>Read more</strong></a></p>

									<h3><span style="color:#003a70;">Nonprofits helping nonprofits</span></h3>

									<p>We're excited to share this post from our partner <a href="https://outreach.abetterinternet.org/e/1011011/index/2ntky/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">Horizontal</a>, who has integrated Divvi Up into their <a href="https://outreach.abetterinternet.org/e/1011011/2024-08-22/2ntl2/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">Tella</a> product with their release of Tella Android 2.10.0. As an <a href="https://outreach.abetterinternet.org/e/1011011/blog-horizontal-/2ntl5/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">early adopter</a> of our privacy preserving telemetry service in their Shira platform, Horizontal continues to lead the way in protecting user data while gaining valuable insights.<br>
									<a href="https://outreach.abetterinternet.org/e/1011011/blog-horizontal-tella-/2ntl8/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);"><strong>Read more</strong></a></p>
									</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top"><h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#3771c8;">New Sponsor Announcement</span></h1>
<a href="https://outreach.abetterinternet.org/e/1011011/2024-08-22/2ntlk/%%email_id%%/h/%%internal.tracker_url_hash%%"><span style="color:#003a70;"><img align="right" alt="" border="0" height="40" src="/images/newsletters/2024/2024-08-22-brighter-bytes-august-2024-newsletter/image-05.png" style="width: 180px; float: right; margin-left: 2px; margin-right: 2px; border-width: 0px; border-style: solid; height: 40px;" width="180"></span></a>

<h3><span style="color:#003a70;">Welcome to our newest Silver Sponsor!</span></h3>

<p><strong><a href="https://outreach.abetterinternet.org/e/1011011/2024-08-22/2ntlc/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: #3771c8;">DigitalOcean</a></strong> simplifies cloud computing so builders and businesses can spend less time managing their infrastructure and more time building innovative applications that drive business growth.</p>
</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(194, 233, 233);" valign="top">
									<h3><span style="color:#003a70;"><em>Did you know?</em></span></h3>

									<p><strong>Sponsorships provide the majority of our annual funding.</strong> Billions of people worldwide depend on Let’s Encrypt continuing to be widely available, secure, well-maintained, and on the leading edge of encryption. We cannot do that without continued support from people like you and organizations like yours.<br>
									<br>
									<img align="right" alt="" border="0" height="72" src="/images/newsletters/2024/2024-08-22-brighter-bytes-august-2024-newsletter/image-06.png" style="width: 120px; height: 72px; float: right; border-width: 0px; border-style: solid;" width="120">If high quality and reliable website encryption is critical to your business operations, please consider <strong><a href="https://outreach.abetterinternet.org/e/1011011/sponsor-/2ntlg/%%email_id%%/h/%%internal.tracker_url_hash%%" style="color: rgb(55, 113, 200);">becoming a sponsor</a></strong>. And if you’re already a sponsor, we <strong>thank you</strong> for helping us build a more secure and privacy-respecting Internet!</p>
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
									48 Market St, PMB 77519<br>
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
