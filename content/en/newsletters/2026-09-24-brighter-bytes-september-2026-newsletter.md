---
title: "Brighter Bytes - September 2026 Newsletter"
date: "2026-09-24T07:38:26-07:00"
excerpt: "Let's Encrypt • How We Built a Data Warehouse Using ClickHouse • Prossimo • Hickory DNS v0.26.2 Released in Response to LLM-Assisted Vulnerability Research • Datadog Joins as a Silver Sponsor! • Shout-Outs • Who do we know in Antarctica?"
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
									<td align="left" class="preheaderContent" pardot-data="link-color:#3771c8;" pardot-region="preheader_content00" style="text-size-adjust: 100%; color: rgb(128, 128, 128); font-family: Helvetica; font-size: 10px; line-height: 12.5px; text-align: left; padding: 10px 20px; background: rgb(249, 247, 237);" valign="top">The latest news from ISRG: September 2026</td>
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
									<td align="left" class="headerContent" pardot-region="header_image" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #505050; font-family: Helvetica; font-size: 20px; font-weight: bold; line-height: 20px; text-align: left; vertical-align: middle; padding: 0;" valign="top"><img alt="" border="0" src="/images/newsletters/2026/2026-09-24-brighter-bytes-september-2026-newsletter/image-01.png" style="width: 620px; border-width: 0px; border-style: solid;" width="620">​​​​​</td>
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
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="font-size:28px;"><span style="color:#3771c8;">Let's Encrypt&nbsp;</span></span></h1>

									<h3><span style="font-size:20px;"><span style="color:#003a70;">How We Built a Data Warehouse Using ClickHouse</span></span></h3>
									<span style="font-size:16px;">When the scripts that generate the data for letsencrypt.org/stats broke yet again, we decided to retire it rather than continue to repair it. Let's Encrypt issues six to ten million certificates each day, producing a large volume of logs that keeps growing. It became increasingly time-consuming and difficult to answer questions about our own issuance like “how many certificates use the ‘shortlived’ profile.” Using raw logs, this requires finding, parsing and extracting relevant portions of loglines. Querying the database behind our issuance API is not a practical option, as it’s built for transactions rather than analysis. We'd also used a log search SaaS product, but our bills were growing much faster than we'd like, and while it was fine for searching, it wasn't able to do the analytic workloads we needed. We knew we could dream bigger and better.<br>
									<br>
									Continue reading the full <a href="https://outreach.abetterinternet.org/e/1011011/2026-09-17-clickhouse-html/4qhxb/%%email_id%%/h/%%internal.tracker_url_hash%%">blog post</a> to learn more.&nbsp;</span><br>
									&nbsp;
									<hr></td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="font-size:28px;"><span style="color:#3771c8;">Prossimo&nbsp;</span></span></h1>

									<h3><span style="font-size:20px;"><span style="color:#003a70;">Hickory DNS v0.26.2 Released in Response to LLM-Assisted Vulnerability Research</span></span></h3>
									<span style="font-size:16px;">Hickory DNS, a high-performance, memory-safe, and fully recursive DNS resolver developed as part of ISRG's Prossimo project, has recently benefited from LLM-assisted vulnerability research. This past month, <a href="https://outreach.abetterinternet.org/e/1011011/ckory-dns-releases-tag-v0-26-2/4qhxf/%%email_id%%/h/%%internal.tracker_url_hash%%&nbsp;">Hickory DNS released v0.26.2</a>, the project's first release responding to a large number of LLM-assisted vulnerability reports.<br>
									<br>
									A big thank you to David Cook, Dirkjan Ochtman, and Daniel McCarney for their work getting this release ready over the past few months. Additionally, much gratitude to the researchers for helping us make Hickory DNS even more secure, particularly Qifan Zhang from Palo Alto Networks.<br>
									<br>
									We also have a few suggestions for vulnerability management best practices in this new world. Continue reading the full <a href="https://outreach.abetterinternet.org/e/1011011/blog-vulns-and-llms/4qhxj/%%email_id%%/h/%%internal.tracker_url_hash%%">blog post</a> to learn more.&nbsp;</span><br>
									&nbsp;
									<hr></td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="font-size:28px;"><span style="color:#3771c8;">New Sponsor Announcement</span></span></h1>

									<h3><span style="font-size:20px;"><span style="color:#003a70;"><img align="right" alt="" border="0" height="200" src="/images/newsletters/2026/2026-09-24-brighter-bytes-september-2026-newsletter/image-02.png" style="width: 200px; height: 200px; margin: 10px; border-width: 0px; border-style: solid; float: right;" width="200">Datadog Joins as a Silver Sponsor!&nbsp;</span></span><br>
									&nbsp;</h3>
									<span style="font-size:16px;"><em>"HTTPS should be the default everywhere. Let’s Encrypt made that practical at internet scale, and we’re proud to support that work."&nbsp;</em></span><br>
									<br>
									<span style="font-size:16px;">Jeremy Garcia, VP, Technical Community and Open Source, <a href="https://outreach.abetterinternet.org/e/1011011/2026-09-24/4qhxm/%%email_id%%/h/%%internal.tracker_url_hash%%">Datadog</a></span><br>
									<br>
									<br>
									<br>
									<span style="font-size:20px;"><span style="color:#003a70;"><strong>Join our Global Community of Sponsors</strong></span></span><br>
									<br>
									<span style="font-size:16px;">Does your company rely on the work we do? Consider <a href="https://outreach.abetterinternet.org/e/1011011/sponsor/4qhxq/%%email_id%%/h/%%internal.tracker_url_hash%%">becoming a sponsor</a> and help us keep building a safer, more secure Internet for everyone.<br>
									<br>
									To inquire about joining our sponsor community reach out to sponsor@letsencrypt.org, we're happy to answer questions.</span><br>
									&nbsp;
									<hr></td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="font-size:28px;"><span style="color:#3771c8;">Shout-Outs</span></span></h1>

									<h3><span style="font-size:20px;"><span style="color:#003a70;">Who do we know in Antarctica?<br>
									<img align="right" alt="" border="0" height="157" src="/images/newsletters/2026/2026-09-24-brighter-bytes-september-2026-newsletter/image-03.jpg" style="width: 300px; height: 157px; float: right; margin: 10px; border-width: 0px; border-style: solid;" width="300"></span></span></h3>
									<span style="font-size:16px;">Thank you to everyone who donated and left comments telling us how much you appreciate our work during our Summer Campaign. We had fun sharing anecdotes with the team about donations that came in from all around the world!&nbsp;<br>
									<br>
									And we really do mean all around the world: donations came from 57 countries across six continents, from Tokyo to Berlin, São Paulo to Nairobi. Does anyone know someone in Antarctica? Let’s get full continental representation next time!<br>
									<br>
									It takes a community to sustain Internet-scale projects like Let's Encrypt. <strong>Thank you</strong> for being part of ours and for helping us build a better Internet.</span><br>
									<br>
									<br>
									<strong><span style="font-size:20px;"><span style="color:#003a70;">Heading to Open Source Summit Europe in October?&nbsp;<br>
									<br>
									​​​</span></span></strong><span style="font-size: 16px;">Sarah and Sally would love to meet up in Prague. Reach out to us: outreach@abetterinternet.org, and we can make a plan to connect in person.<br>
									&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img alt="" border="0" height="100" src="/images/newsletters/2026/2026-09-24-brighter-bytes-september-2026-newsletter/image-04.png" style="width: 100px; height: 100px; margin: 10px; border-width: 0px; border-style: solid;" width="100">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img alt="" border="0" height="100" src="/images/newsletters/2026/2026-09-24-brighter-bytes-september-2026-newsletter/image-05.png" style="width: 100px; height: 100px; margin: 10px; border-width: 0px; border-style: solid;" width="100"><br>
									Sarah Gran, VP of Advancement&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Sally Bell, Director of Advancement</span><br>
									&nbsp;
									<hr></td>
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
									​​​Internet Security Research Group<br>
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
