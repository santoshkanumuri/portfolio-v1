import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Mail, MapPin, Phone, ExternalLink, BookOpen, Award, Users, Code, GraduationCap, FileText } from 'lucide-react'
// Import your professional portrait
import professionalPortrait from './assets/profile.jfif'

import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const publications = [
    {
      title: "An Approach to Brand Planning Under High Competitor Set Variation",
      authors: "Dass, Mayukh, Piyush Kumar, and Acharya, Manaswini",
      journal: "Journal of Business Research",
      year: "2024",
      volume: "182, 114798",
      type: "published"
    },
    {
      title: "An Investigation into Slogan Design and Brand Alignment",
      authors: "Dass, Mayukh, Chiranjeev Kohli, and Acharya, Manaswini",
      journal: "Journal of Advertising Research",
      year: "2023",
      volume: "(1), 43–60",
      type: "published"
    },
    {
      title: "The Paradox of Product Salience",
      authors: "Acharya, Manaswini, Aparna Labroo, and Mayukh Dass",
      journal: "Journal of Consumer Research",
      year: "Under Review",
      note: "Featured",
      type: "under-review"
    },
    {
      title: "Fractured Identities: Consumer Vulnerability and the Market's Role",
      authors: "Acharya, Manaswini, Debra L. Laverie, and Popovich Deidre",
      journal: "Journal of the Academy of Marketing Science",
      year: "Under Review",
      type: "under-review"
    }
  ]

  const workingPapers = [
    {
      title: "Developing an Integrated Model: Better Skills and Better Care",
      authors: "Chandy, Rajesh, Acharya, Manaswini, Mehta, Gaurav, and Narasimhan, Om",
      status: "Data collection",
      funding: "Gates Foundation",
      target: "Marketing Science"
    },
    {
      title: "Double Stigma: Role in AI Innovation Diffusion & Technology Adoption among Older Adults",
      authors: "Acharya, Manaswini, Dass, Mayukh, and Labroo, Aparna",
      status: "Finalizing Data Analysis",
      target: "Journal of Marketing Research"
    }
  ]

  const keyAwards = [
    { text: "Best in Track Paper, Summer AMA, Leveraging Data for B2B Marketing Innovation (2025)", highlight: true },
    { text: "NSF Proposal Writing Grant ($15,000) (2024)", highlight: true },
    { text: "Winner, Conceptual Articles of the AMS Review-Sheth Foundation (DoCCA) (2024)", highlight: true }
  ]

  const otherAwards = [
    "CBSIG, AMA Award for Best Research Proposal ($1,500) (2025)",
    "Outstanding Contribution to Research, Rawls College of Business ($1,000) (2025)",
    "Fellow, ISBM, Smeal College of Business, PA (2024)",
    "Rawls Teaching Award, Texas Tech University (2024)"
  ]

  const keySkills = [
    "R", "Python", "fMRI analysis (SPM, nilearn)", "Machine Learning", "Experimental Design"
  ]
  
  const analyticsSkills = [
    "MATLAB", "Stata", "SPSS", "Excel (advanced)", "Tableau", "G*Power"
  ]
  
  const specializedSkills = [
    "PROCESS Macro", "PsyToolkit", "PFNA", "NVivo", "Sentiment & Topic Modeling"
  ]

  const navItems = [
    { id: 'home', label: 'Home', icon: Users },
    { id: 'research', label: 'Research', icon: BookOpen },
    { id: 'teaching', label: 'Teaching', icon: GraduationCap },
    { id: 'awards', label: 'Awards & Service', icon: Award },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ]

  const renderHome = () => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-12"
    >
      <motion.div variants={fadeInUp} className="text-center space-y-6">
        <div className="relative inline-block">
          <motion.img
            src={professionalPortrait}
            alt="Manaswini Acharya"
            className="w-48 h-48 rounded-full object-cover mx-auto shadow-2xl"
            style={{ objectPosition: 'center 15%' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <div>
          <motion.h1 
            className="text-5xl font-bold mb-3"
            style={{ color: 'var(--primary)' }}
            variants={fadeInUp}
          >
            Manaswini Acharya
          </motion.h1>
          <motion.p 
            className="text-xl font-semibold text-gray-700 mt-2"
            variants={fadeInUp}
          >
            Ph.D. Candidate in Marketing
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600"
            variants={fadeInUp}
          >
            Texas Tech University, Rawls College of Business
          </motion.p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
        <Card className="border shadow-md" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}>
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-center text-gray-700">
              I am a Ph.D. candidate in Marketing at Texas Tech University's Rawls College of Business, 
              specializing in <strong className="text-primary">customer-based strategy</strong>, <strong className="text-primary">information processing</strong>, and <strong className="text-primary">marketing strategy</strong> with 
              a focus on <strong className="text-primary">emerging markets and AI</strong>. My research explores the intersection of branding, 
              marketing strategy, and technology, particularly examining how <strong className="text-primary">stigma affects consumer behavior</strong> 
              and product adoption in various contexts.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}>
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#f5f0ff' }}>
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-primary">Theoretical Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center text-gray-600">
              Customer-Based Strategy • Information Processing • Marketing Strategy • Emerging Markets • AI
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}>
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#f5f0ff' }}>
              <Users className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-primary">Substantive Research</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center text-gray-600">
              Better Marketing for a Better World • Stigmatized Contexts • Responsible Marketing
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}>
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#f5f0ff' }}>
              <Code className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-primary">Methodological Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center text-gray-600">
              Experimental Methods • Econometrics • Field Experiments • Machine Learning • fMRI/Neuroimaging
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )

  const renderResearch = () => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <motion.div variants={fadeInUp} className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">Research Portfolio</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          My research focuses on understanding consumer behavior in stigmatized contexts and developing 
          marketing strategies that create positive social impact while driving business outcomes.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card className="mb-8 border-2 shadow-lg highlight-card">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#f5f0ff' }}>
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl text-primary">Dissertation</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Breaking the Barriers: Stigma</h3>
            <h4 className="text-lg font-semibold mb-4 text-gray-700">
              The Paradox of Product Salience: When Advertising Backfires and Amplifies Stigma
            </h4>
            <p className="text-sm leading-relaxed text-gray-600">
              With over <strong>50 million Americans</strong> experiencing stigmatizing health conditions such as menopause 
              and low testosterone, the role of advertising in boosting product awareness and adoption has 
              never been more critical. While advertising typically increases awareness and sales, for 
              products addressing stigmatized health conditions, it may instead backfire...
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
          <BookOpen className="w-6 h-6 text-primary" />
          Published Research
        </h3>
        <div className="space-y-4">
          {publications.filter(p => p.type === 'published').map((pub, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 border" style={{ borderColor: 'var(--border)' }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2 text-gray-800">{pub.title}</h4>
                  <p className="text-sm mb-2 text-gray-600">{pub.authors}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary">{pub.journal}</Badge>
                    <Badge variant="outline">{pub.year}</Badge>
                    <span className="text-sm text-gray-500">{pub.volume}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
          <FileText className="w-6 h-6 text-primary" />
          Manuscripts Under Review
        </h3>
        <div className="space-y-4">
          {publications.filter(p => p.type === 'under-review').map((pub, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className={`hover:shadow-lg transition-all duration-300 ${pub.note ? 'border-2 highlight-card' : 'border'}`} style={{ borderColor: pub.note ? 'var(--primary)' : 'var(--border)' }}>
                <CardContent className="p-6">
                  {pub.note && <Badge className="mb-3 bg-primary text-white font-semibold">⭐ {pub.note}</Badge>}
                  <h4 className="font-semibold text-lg mb-2 text-gray-800">{pub.title}</h4>
                  <p className="text-sm mb-2 text-gray-600">{pub.authors}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary">{pub.journal}</Badge>
                    <Badge variant="outline">{pub.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
          <FileText className="w-6 h-6 text-primary" />
          Working Papers
        </h3>
        <div className="space-y-4">
          {workingPapers.map((paper, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className={`hover:shadow-lg transition-all duration-300 ${paper.funding ? 'border-2 highlight-card' : 'border'}`} style={{ borderColor: paper.funding ? 'var(--primary)' : 'var(--border)' }}>
                <CardContent className="p-6">
                  {paper.funding && <Badge className="mb-3 bg-primary text-white font-semibold">Funded by {paper.funding}</Badge>}
                  <h4 className="font-semibold text-lg mb-2 text-gray-800">{paper.title}</h4>
                  <p className="text-sm mb-2 text-gray-600">{paper.authors}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary">Status: {paper.status}</Badge>
                    <Badge variant="outline">Target: {paper.target}</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )

  const renderTeaching = () => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <motion.div variants={fadeInUp} className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">Teaching Experience</h2>
        <p className="text-lg text-gray-600">
          Passionate about education and mentoring the next generation of marketers
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-all duration-300 border" style={{ borderColor: 'var(--border)' }}>
          <CardHeader>
            <CardTitle className="text-primary">Integrated Marketing Communications</CardTitle>
            <CardDescription className="text-gray-600">Instructor • Texas Tech University</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4 text-gray-700">
              Fall 2022, Spring 2023, Summer 2024, Summer 2025
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary">Course Evaluations</Badge>
              <span className="text-sm font-semibold text-gray-700">4.5/5, 4.5/5, 4.7/5</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 border" style={{ borderColor: 'var(--border)' }}>
          <CardHeader>
            <CardTitle className="text-primary">Digital Marketing</CardTitle>
            <CardDescription className="text-gray-600">Instructor • Texas Tech University</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4 text-gray-700">
              Spring 2025, Fall 2025
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary">Course Evaluation</Badge>
              <span className="text-sm font-semibold text-gray-700">4.5/5</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Teaching Assistant Roles</h3>
        <div className="space-y-3">
          <Card className="border" style={{ borderColor: 'var(--border)' }}>
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-800">Market Forecasting & Analytics</h4>
              <p className="text-sm text-gray-600">Teaching Assistant, Prof. Mayukh Dass</p>
            </CardContent>
          </Card>
          <Card className="border" style={{ borderColor: 'var(--border)' }}>
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-800">AI Strategies for Business</h4>
              <p className="text-sm text-gray-600">Teaching Assistant, Prof. Mayukh Dass</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  )

  const renderAwards = () => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <motion.div variants={fadeInUp} className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">Awards & Service</h2>
        <p className="text-lg text-gray-600">
          Recognition for research excellence and service to the academic community
        </p>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-primary">
          <Award className="w-6 h-6" /> Major Honors & Awards
        </h3>
        <div className="space-y-4 mb-8">
          {keyAwards.map((award, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ x: 10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-2 highlight-card">
                <CardContent className="pt-7 pb-6 px-5">
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">⭐</span>
                    <p className="text-sm font-semibold text-gray-800">{award.text}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Additional Recognition</h3>
        <div className="space-y-3">
          {otherAwards.map((award, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="hover:shadow-md transition-all duration-300 border" style={{ borderColor: 'var(--border)' }}>
                <CardContent className="pt-6 pb-5 px-4">
                  <p className="text-sm text-gray-700">{award}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Service to the Profession</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="border" style={{ borderColor: 'var(--border)' }}>
            <CardHeader>
              <CardTitle className="text-lg text-primary">Editorial Service</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Ad Hoc Reviewer, International Journal of Research in Marketing (2023–2024)</li>
                <li>• Ad Hoc Reviewer, Journal of Electronic Commerce Research (2022–2024)</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border" style={{ borderColor: 'var(--border)' }}>
            <CardHeader>
              <CardTitle className="text-lg text-primary">Conference Service</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• AMA Public Policy Conference, Reviewer (2024–2025)</li>
                <li>• AMA Reviewer (2021–2025)</li>
                <li>• AMS Conference Reviewer (2025)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Professional Affiliations</h3>
        <div className="flex flex-wrap gap-3">
          {["INFORMS (Marketing Science)", "American Marketing Association", "Transformative Consumer Research", "Academy of Marketing Science"].map((affiliation, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge className="text-sm py-2 px-4" variant="secondary">
                {affiliation}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )

  const renderSkills = () => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <motion.div variants={fadeInUp} className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">Technical Skills & Expertise</h2>
        <p className="text-lg text-gray-600">
          Proficient in advanced analytical and programming tools for marketing research
        </p>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card className="mb-6 border-2 shadow-lg highlight-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Code className="w-5 h-5" /> Core Competencies
            </CardTitle>
            <CardDescription className="text-gray-600">
              Primary tools and methodologies for research excellence
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {keySkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Badge className="text-sm py-2 px-4 bg-primary text-white font-semibold">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card className="mb-6 border" style={{ borderColor: 'var(--border)' }}>
          <CardHeader>
            <CardTitle className="text-gray-800">Data Analytics & Visualization</CardTitle>
            <CardDescription className="text-gray-600">
              Statistical analysis and data visualization tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {analyticsSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Badge variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card className="border" style={{ borderColor: 'var(--border)' }}>
          <CardHeader>
            <CardTitle className="text-gray-800">Specialized Research Tools</CardTitle>
            <CardDescription className="text-gray-600">
              Advanced methodological and qualitative analysis tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {specializedSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Badge variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )

  const renderContact = () => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <motion.div variants={fadeInUp} className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">Contact Information</h2>
        <p className="text-lg text-gray-600">
          Let's connect and discuss research opportunities
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
        <Card className="hover:shadow-xl transition-all duration-300 border" style={{ borderColor: 'var(--border)' }}>
          <CardContent className="pt-12 pb-10 px-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f5f0ff' }}>
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <a href="mailto:Macharya@ttu.edu" className="text-primary hover:underline font-medium">
                    Macharya@ttu.edu
                  </a>
                </div>
              </div>

              <Separator />

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f5f0ff' }}>
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Office</p>
                  <p className="text-gray-600">Room E379, Rawls College of Business</p>
                  <p className="text-gray-600">Texas Tech University, Lubbock, TX</p>
                </div>
              </div>

              <Separator />

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f5f0ff' }}>
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">806.742.3188</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return renderHome()
      case 'research': return renderResearch()
      case 'teaching': return renderTeaching()
      case 'awards': return renderAwards()
      case 'skills': return renderSkills()
      case 'contact': return renderContact()
      default: return renderHome()
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Navigation */}
      <motion.nav 
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b"
        style={{ borderColor: 'var(--border)' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-2xl font-bold"
              style={{ color: 'var(--primary)' }}
              whileHover={{ scale: 1.05 }}
            >
              Manaswini Acharya
            </motion.h1>
            
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      activeSection === item.id
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </motion.button>
                )
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="outline" size="sm">Menu</Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.footer 
        className="border-t bg-white"
        style={{ borderColor: 'var(--border)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-sm">
            <p className="text-gray-600">© 2024 Manaswini Acharya. All rights reserved.</p>
            <p className="mt-2 text-primary font-medium">Ph.D. Candidate in Marketing, Texas Tech University</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
